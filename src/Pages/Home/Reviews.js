import React from 'react';

const Reviews = () => {
    return (
        <section id="testimonials" className="testimonials py-5">
            <div className="container">
            <h1 className="text-center">Customer satisfaction</h1>
                <hr style={{ width: '50px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
                <div className="row">
                    <div className="col-sm-4">
                        <div className="testimonial-item">
                            <img src="assets/img/google-reviews-logo-300x165.png" className="testimonial-img" alt="" />
                            <h3>Rechard John
                            </h3>
                            <img src="./assets/img/5-stars-reviews.png" alt="" />
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i> “They are absolutely stunning or product quality and delivery process.”
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="testimonial-item">
                            <img src="assets/img/google-reviews-logo-300x165.png" className="testimonial-img" alt="" />
                            <h3>Gamora Luis
                            </h3>
                            <img src="./assets/img/5-stars-reviews.png" alt="" />
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i> “I purchase all products from them for my business. I am really happy for that”
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="testimonial-item">
                            <img src="assets/img/google-reviews-logo-300x165.png" className="testimonial-img" alt="" />
                            <h3>Duncan Patmore
                            </h3>
                            <img src="./assets/img/5-stars-reviews.png" alt="" />
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i> “Day by day they are increasing their service. I really appritiate their support.”
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;