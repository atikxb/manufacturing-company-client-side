import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ButtonSpinner from '../Loading/ButtonSpinner';
const AddProduct = () => {
    const [loading, isLoading] = useState(false);
    const imageAPIKey = '77d32d9c4f942e5f8d2fada6d2811886';
    const handleAdd = async event => {
        event.preventDefault();
        isLoading(true);
        const name = event.target.name.value;
        const minQuantity = event.target.minQuantity.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const details = event.target.details.value;
        const img = event.target.image.files[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageAPIKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const parts = { name, details, minQuantity, quantity, price, img };
                    fetch('http://localhost:5000/add-parts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(parts),
                    })
                        .then(res => res.json())
                        .then(result => {
                            result.insertedId && toast.success("Product added successfully");
                            isLoading(false);
                        });
                }
            });
    }
    return (
        <div class="container py-5">
            <h1 className="text-center">Add new Parts</h1>
                    <hr style={{width: '100px',margin: '-5px auto 40px auto',height: '2px', backgroundColor: 'black'}}/>
            <div class="row justify-content-center">
                <div class="col-sm-8">
                    <h2>Login</h2>
                    <form onSubmit={handleAdd}>
                        <div class="mb-3">
                            <input type="text" name='name' class="form-control" placeholder='Parts Name' required/>
                        </div>
                        <div class="mb-3">
                            <input type="number" name='minQuantity' class="form-control" placeholder='Minimum Quantity' required/>
                        </div>
                        <div class="mb-3">
                            <input type="number" name='quantity' class="form-control" placeholder='Quantity' required/>
                        </div>
                        <div class="mb-3">
                            <input type="number" name='price' class="form-control" placeholder='Price' required/>
                        </div>
                        <div class="mb-3">
                            <input type="file" name='image' accept='image/*' class="form-control" placeholder='Image' required/>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" name="details" placeholder='Details' cols="30" rows="10" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit {loading && <ButtonSpinner />}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;