import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useSingleParts from '../../hooks/useSingleParts';
import Header from '../Shared/Header/Header';

const Purcahse = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { id } = useParams();
    const [singleParts] = useSingleParts(id);
    const { name, price, minQuantity, quantity, img, details } = singleParts;
    const [partsQuantity, setpartsQuantity] = useState(quantity);
    const [orderQuantity, setOrderQuantity] = useState(minQuantity);
    const onSubmit = async data => {
        const order = {partsId: id, partsName: name, quantity: data.orderQuantity || minQuantity, displayName: data.name, email: data.email, address: data.address, number: data.number, others: data.others  };
        const remainQuantity = quantity - (data.orderQuantity || minQuantity);
        console.log(remainQuantity);
        fetch('http://localhost:5000/order', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(order),
                })
                .then(res => res.json())
                .then(result => {
                    setpartsQuantity(remainQuantity);
                    singleParts.quantity = remainQuantity;
                    result.insertedId && toast.success("Your order is placed successfully");
                });
    };
    return (
        <main>
            <Header />
            <section id="Business" className="p-5">
                <div className="container">
                    <h1 className="text-center">{id}</h1>
                    <hr style={{ width: '100px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={img} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h3>{name}</h3>
                            <p>{details}</p>
                            <h3>Price: ${price}</h3>
                            <p className="badge bg-secondary me-2">Minimum Quantity: {minQuantity}</p>
                            <p className="badge bg-secondary">Available Quantity: {partsQuantity || quantity}</p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="user_purchase">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="input_group">
                                        <label htmlFor="quantity">Order Quanity</label>
                                        <input {...register("orderQuantity")} onBlur={(e) => setOrderQuantity(e.target.value)} type="number" id="quantity" className="form-control" defaultValue={minQuantity} defaultChecked/>
                                        <p className='text-danger mt-2'>{(orderQuantity < minQuantity || orderQuantity > quantity) && <span>Quantity must be between {minQuantity}-{quantity}</span>}</p>
                                    </div>
                                    <div className="input_group">
                                        <label htmlFor="name">Name</label>
                                        <input {...register("name", { required: true })} type="text" id="name" className="form-control" value={user?.displayName} readOnly/>
                                        <p className='text-danger mt-2'>{errors.name && <span>Please input the name</span>}</p>
                                    </div>
                                    <div className="input_group">
                                        <label htmlFor="email">Email Address</label>
                                        <input {...register("email", { required: true })} type="email" id="email" className="form-control" value={user?.email} readOnly/>
                                        <p className='text-danger mt-2'>{errors.email && <span>Please input the Email</span>}</p>
                                    </div>
                                    <div className="input_group">
                                        <label htmlFor="Address">Address</label>
                                        <input {...register("address", { required: true })} type="text" id="Address" className="form-control" />
                                        <p className='text-danger mt-2'>{errors.address && <span>Please input the Address</span>}</p>
                                    </div>
                                    <div className="input_group">
                                        <label htmlFor="Number">Phone Number</label>
                                        <input {...register("number", { required: true })} type="number" id="Number" className="form-control" />
                                        <p className='text-danger mt-2'>{errors.number && <span>Please input the Phone Number</span>}</p>
                                    </div>
                                    <div className="input_group">
                                        <label htmlFor="others">Others</label>
                                        <textarea className='form-control' {...register("others")} id="others"cols="30" rows="5"></textarea>
                                    </div>
                                    <div className="input_group py-3">
                                        <input className="btn btn-warning" type="submit" value="Submit" disabled={orderQuantity < minQuantity || orderQuantity > quantity} />
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
};

export default Purcahse;