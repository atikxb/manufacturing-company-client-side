import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000//reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <section id="testimonials" className="testimonials py-5">
            <div className="container">
                <h1 className="text-center">Reviews</h1>
                <hr style={{ width: '50px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
                <div className="row">
                    {
                        reviews.map(review => <div key={review._id} className="col-sm-4">
                            <div className="testimonial-item">
                                <h3>{review.name}</h3>
                                {
                                    [...Array(parseInt(review.rating))].map((element, i) => (
                                        <i key={i} className="bi bi-star-fill text-warning"></i>
                                    )
                                    )
                                }
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i> “{review.review}”
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;