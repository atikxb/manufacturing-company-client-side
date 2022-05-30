import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const review = {name: user?.displayName || user?.email, rating: data.rating, review: data.review};
        fetch('https://afternoon-savannah-56970.herokuapp.com/review', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(review),
                })
                .then(res => res.json())
                .then(result => {
                    result.insertedId && toast.success("Review added successfully");
                });
    };

    return (
        <div className="container">
                <h1 className="text-center">Add a Review</h1>
                    <hr style={{width: '50px',margin: '0px auto 40px auto',height: '2px', backgroundColor: 'black'}}/>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="form shadow-sm p-5">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="mb-3">
                                        <label htmlFor="rating" className="form-label">Rating (1-5)</label>
                                        <input {...register("rating", { required: true})} type="number" min="1" max="5" className="form-control" id="rating" />
                                        <p className='text-danger mt-2'>{errors.rating && <span>Please choose youu desired rating</span>}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="review" className="form-label">review</label>
                                        <textarea className="form-control" {...register("review", { required: true })} id="review" cols="30" rows="10"></textarea>
                                        <p className='text-danger mt-2'>{errors.review && <span>Please input the review</span>}</p>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 w-lg-50">Login </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default AddReview;