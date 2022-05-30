import React from 'react';
import { useParams } from 'react-router-dom';
import useSingleParts from '../../hooks/useSingleParts';
import Header from '../Shared/Header/Header';

const Purcahse = () => {
    const { id } = useParams();
    const [singleParts] = useSingleParts(id);
    const { name, price, minQuantity, quantity, img, details } = singleParts;
    return (
        <main>
            <Header />
            <section id="Business" class="p-5">
                <div class="container">
                    <h1 class="text-center">{id}</h1>
                    <hr style={{ width: '100px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
                    <div class="row">
                        <div class="col-lg-6">
                            <img src={img} alt="" />
                        </div>
                        <div class="col-lg-6">
                            <h3>{name}</h3>
                            <p>{details}</p>
                            <h3>Price: ${price}</h3>
                            <p class="badge bg-secondary me-2">Minimum Quantity: {minQuantity}</p>
                            <p class="badge bg-secondary">Available Quantity: {quantity}</p>
                            <br />
                            <button class="btn btn-primary">Update</button>
                            <button class="btn btn-warning">Delete</button>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
};

export default Purcahse;