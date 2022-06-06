import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Confirmation from './Confirmation';

const OrderRow = ({ index, order, refetch }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { _id, partsName, price, quantity, status, transactionId } = order;
    const handleDelete = () => {
        fetch(`http://localhost:5000//order/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
            .then(res => res.json())
            .then(result => {
                console.log(result);
                refetch();
                setShow(false)
                result.deletedCount && toast.warning("Order deleted");
            });

    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{partsName}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{status}</td>
            <td>{
                status === 'unpaid' && <Link to={`/dashboard/payment/${_id}`} className='btn btn-success'>Make Payment</Link>}{transactionId} {
                    status === 'unpaid' && <button onClick={handleShow} className='btn btn-danger ms-3'>Cancel</button>
                }</td>
            <Confirmation show={show} handleClose={handleClose} handleDelete={handleDelete} />
        </tr>

    );
};

export default OrderRow;