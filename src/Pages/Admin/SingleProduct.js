import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Confirmation from '../Dashboard/Confirmation';
import Loading from '../Loading/Loading';

const SingleProduct = ({ singleParts, isLoading, refetch }) => {
    const { _id, name, price, minQuantity, quantity, img } = singleParts;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        fetch(`http://localhost:5000//parts/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
            .then(res => res.json())
            .then(result => {
                refetch();
                result.deletedCount && toast.warning("Product deleted");
            });

    }
    if (isLoading) { return <Loading /> }
    return (
        <tr>
            <td>{name}</td>
            <td>{minQuantity}</td>
            <td>{quantity}</td>
            <td><img src={img} alt={name} width='50px' /></td>
            <td>{price}</td>
            <td><button onClick={handleShow} className='btn btn-danger ms-3'>Delete</button></td>
            <Confirmation show={show} handleClose={handleClose} handleDelete={handleDelete} />
        </tr>
    );
};

export default SingleProduct;