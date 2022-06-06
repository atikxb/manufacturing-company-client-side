import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Confirmation from '../Dashboard/Confirmation';

const ManageOrderRow = ({ index, order, refetch }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { _id, partsName, price, quantity, status, transactionId, displayName } = order;
    const handleShipment = () => {
        fetch(`http://localhost:5000/order-shipment/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    // setClientSecret(data.clientSecret);
                    refetch();
                    data.modifiedCount && toast.success("Your order is placed successfully");
                });

    }
    const handleDelete = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
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
            <td>{displayName}</td>
            <td>{partsName}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{status}</td>
            <td>{
                status === 'pending' && <button onClick={handleShipment} style={{ width: '100px' }} className='btn btn-success ms-3'>Ship Now</button>} {status === 'shipped' && transactionId} {
                    status === 'unpaid' && <button style={{ width: '100px' }} onClick={handleShow} className='btn btn-danger ms-3'>Cancel</button>
                }</td>
            <Confirmation show={show} handleClose={handleClose} handleDelete={handleDelete} />
        </tr>
    );
};

export default ManageOrderRow;