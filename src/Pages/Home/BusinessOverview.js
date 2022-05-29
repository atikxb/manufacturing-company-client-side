import React from 'react';

const BusinessOverview = () => {
    return (
        <section id="Business" class="py-5">
            <div class="container">
                <h1 class="text-center">Business overview</h1>
                <hr style={{ width: '50px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />

                <div class="row">

                    <div class="four col-md-3">
                        <div class="counter-box colored">
                            <i class="fa fa-thumbs-o-up"></i>
                            <span class="counter">100+</span>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                    <div class="four col-md-3">
                        <div class="counter-box">
                            <i class="fa fa-group"></i>
                            <span class="counter">120M+</span>
                            <p>Annual revenue</p>
                        </div>
                    </div>
                    <div class="four col-md-3">
                        <div class="counter-box">
                            <i class="fa  fa-shopping-cart"></i>
                            <span class="counter">33K+</span>
                            <p>Reviews</p>
                        </div>
                    </div>
                    <div class="four col-md-3">
                        <div class="counter-box">
                            <i class="fa  fa-user"></i>
                            <span class="counter">50+</span>
                            <p>Tools</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default BusinessOverview;