import React from 'react';

const Reviews = () => {
    return (
        <section id="testimonials" class="testimonials py-5">
            <div class="container">
            <h1 class="text-center">Customer satisfaction</h1>
                <hr style={{ width: '50px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
                <div class="row">
                    <div class="col-sm-4">
                        <div class="testimonial-item">
                            <img src="assets/img/google-reviews-logo-300x165.png" class="testimonial-img" alt="" />
                            <h3>Rechard John
                            </h3>
                            <img src="./assets/img/5-stars-reviews.png" alt="" />
                            <p>
                                <i class="bx bxs-quote-alt-left quote-icon-left"></i> “They are absolutely stunning or product quality and delivery process.”
                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="testimonial-item">
                            <img src="assets/img/google-reviews-logo-300x165.png" class="testimonial-img" alt="" />
                            <h3>Gamora Luis
                            </h3>
                            <img src="./assets/img/5-stars-reviews.png" alt="" />
                            <p>
                                <i class="bx bxs-quote-alt-left quote-icon-left"></i> “I purchase all products from them for my business. I am really happy for that”
                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="testimonial-item">
                            <img src="assets/img/google-reviews-logo-300x165.png" class="testimonial-img" alt="" />
                            <h3>Duncan Patmore
                            </h3>
                            <img src="./assets/img/5-stars-reviews.png" alt="" />
                            <p>
                                <i class="bx bxs-quote-alt-left quote-icon-left"></i> “Day by day they are increasing their service. I really appritiate their support.”
                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;