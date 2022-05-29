import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section id="hero" class="d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="hero_text">
                        <h1 class="text-center mb-5">Welcome to Digitech</h1>
                        <center> <Link to='/' class="btn btn-lg btn-warning">Buy Parts</Link></center>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Banner;