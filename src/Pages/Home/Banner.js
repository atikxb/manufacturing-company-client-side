import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="hero_text">
                        <h1 className="text-center mb-5">Welcome to Digitech</h1>
                        <center> <Link to='/' className="btn btn-lg btn-warning">Buy Parts</Link></center>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Banner;