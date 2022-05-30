import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Checkout from './Checkout';
const stripePromise = loadStripe('pk_test_1mOWshLTI5MpRnKCqePuHEG600FVdGd5NS');

const Payment = () => {
    const { id } = useParams();
    const { isLoading, refetch, data: order } = useQuery(['payment', id], () =>
        fetch(`http://localhost:5000/payment/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    );
    if (isLoading) { return <Loading /> }
    return (
        <div class="continer py-5">
            <div class="row justify-content-center">
                <div class="col-sm-8">
                    <Card>
                        <Card.Header as="p">#{order._id}</Card.Header>
                        <Card.Body>
                            <Card.Title>Parts Name: {order.partsName}</Card.Title>
                            <Card.Text>
                                <p>Quantity: {order.quantity}</p>
                                <p>Customer Name: {order.displayName}</p>
                                <p>Number: {order.number}</p>
                                <p>Address: {order.address}</p>
                                <p>Status: {order.status}</p>
                            </Card.Text>
                            <Elements stripe={stripePromise}>
                                <Checkout refetch={refetch} order={order} />
                            </Elements>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Payment;