import React from 'react';
import { Link } from 'react-router-dom';

const SingleParts = ({ singleParts }) => {
    const { _id, name, price, minQuantity, quantity, img, details } = singleParts;
    return (
        <div class="col-lg-4 mb-3">
            <div class="card h-100">
                <div class="badge bg-danger text-white position-absolute mt-1 ms-1">Price: ${price}</div>
                <img class="card-img-top" src={img} alt={name} />
                <div class="card-body">

                    <div class="quantity_full d-flex align-items-center justify-content-between">
                        <div class="quantity">
                            <p>Minimum Quantity : {minQuantity}</p>
                        </div>
                        <div class="available_quantity">
                            <p>Available Quantity : {quantity}</p>
                        </div>
                    </div>

                    <h5>{name}</h5>
                    <div class="product_dec">
                        <p className='mt-3'> {details}</p>
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <Link class="btn btn-warning mt-auto" to={`/purchase/${_id}`} role="button">Purchase Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleParts;