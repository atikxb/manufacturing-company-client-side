import React from 'react';
import { Link } from 'react-router-dom';

const SingleParts = ({ singleParts }) => {
    const { _id, name, price, minQuantity, quantity, img, details } = singleParts;
    return (
        <div className="col-lg-4 mb-3">
            <div className="card h-100">
                <div className="badge bg-danger text-white position-absolute mt-1 ms-1">Price: ${price}</div>
                <img className="card-img-top" src={img} alt={name} />
                <div className="card-body">

                    <div className="quantity_full d-flex align-items-center justify-content-between">
                        <div className="quantity">
                            <p>Minimum Quantity : {minQuantity}</p>
                        </div>
                        <div className="available_quantity">
                            <p>Available Quantity : {quantity}</p>
                        </div>
                    </div>

                    <h5>{name}</h5>
                    <div className="product_dec">
                        <p className='mt-3'> {details}</p>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <Link className="btn btn-warning mt-auto" to={`/purchase/${_id}`} role="button">Purchase Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleParts;