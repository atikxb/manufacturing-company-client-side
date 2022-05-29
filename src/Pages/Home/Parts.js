import React from 'react';

const Parts = () => {
    return (
        <section id='parts' class="py-5">
            <div class="container">
                <h1 class="text-center">Computer Parts</h1>
                <hr style={{ width: '50px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
                <div class="row">
                    <div class="col-lg-4 mb-3">
                        <div class="card h-100">
                            <div class="badge bg-danger text-white position-absolute mt-1 ms-1">Price: $100</div>
                            <img class="card-img-top" src="./vendor/image/product/1.jpg" alt="..." />
                            <div class="card-body">

                                <div class="quantity_full d-flex align-items-center justify-content-between">
                                    <div class="quantity">
                                        <p>Minimum Quantity : 50</p>
                                    </div>
                                    <div class="available_quantity">
                                        <p>Available Quantity : 90</p>
                                    </div>
                                </div>

                                <h5>ABS Legend Gaming PC - Intel i9</h5>
                                <div class="product_dec">
                                    <p className='mt-3'> Operating System: </p>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center">
                                    <a class="btn btn-warning mt-auto" href="purchase_page.html" role="button"><i class="bi bi-cart-plus"></i> Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Parts;