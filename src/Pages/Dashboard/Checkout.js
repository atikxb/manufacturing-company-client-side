import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ButtonSpinner from '../Loading/ButtonSpinner';

const Checkout = ({ order, refetch }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);
    console.log(clientSecret);
    const { price, _id, status } = order;
    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);
    const handleSubmit = async event => {
        event.preventDefault();
        setLoading(true);
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error?.message);
        } else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
        }

        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: order.displayName,
                        email: order.email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError.message);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            const payment = { orderId: _id, transactionId: paymentIntent.id, price: price }
            fetch(`http://localhost:5000/order/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    // setClientSecret(data.clientSecret);
                    refetch();
                    paymentIntent.id && data.modifiedCount && toast.success("Your order is placed successfully");
                    setLoading(false);
                });
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Please enter card details below:</p>
                <CardElement className='form-control py-3'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success mt-2' type="submit" disabled={!stripe || !elements || !clientSecret || status !== 'unpaid'}>
                    Pay {loading && <ButtonSpinner />}
                </button>
            </form>
            {cardError && <p className='text-center text-danger'>{cardError}</p>}
        </div>
    );
};

export default Checkout;