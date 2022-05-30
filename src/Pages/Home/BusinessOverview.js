import React from 'react';

const BusinessOverview = () => {
    return (
        <section id="Business" className="py-5">
            <div className="container">
                <h1 className="text-center">Business overview</h1>
                <hr style={{ width: '50px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />

                <div className="row">

                    <div className="four col-md-3">
                        <div className="counter-box colored">
                            <i className="fa fa-thumbs-o-up"></i>
                            <span className="counter">100+</span>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                    <div className="four col-md-3">
                        <div className="counter-box">
                            <i className="fa fa-group"></i>
                            <span className="counter">120M+</span>
                            <p>Annual revenue</p>
                        </div>
                    </div>
                    <div className="four col-md-3">
                        <div className="counter-box">
                            <i className="fa  fa-shopping-cart"></i>
                            <span className="counter">33K+</span>
                            <p>Reviews</p>
                        </div>
                    </div>
                    <div className="four col-md-3">
                        <div className="counter-box">
                            <i className="fa  fa-user"></i>
                            <span className="counter">50+</span>
                            <p>Tools</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default BusinessOverview;