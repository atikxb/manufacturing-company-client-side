import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { isLoading, refetch, data: currentUser } = useQuery(['payment', user?.email], () =>
        fetch(`http://localhost:5000/user/${user?.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    );
    const onSubmit = async data => {
        const updatedUser = { education: data.education, location: data.location, number: data.number, linkedin: data.linkedin };
        console.log(updatedUser);
        fetch(`http://localhost:5000/user/${user?.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updatedUser),
        })
            .then(res => res.json())
            .then(result => {
                refetch();
                result.modifiedCount && toast.success("Profile updated!");
            });
    };
    if (isLoading) { return <Loading /> }
    return (
        <div className='container py-5'>
            <h1 className="text-center">Welcome, {user?.displayName}</h1>
            <hr style={{ width: '100px', margin: '0px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
            <div class="row align-items-center">
                <div class="col-sm-6">
                    <div class="card p-5">
                        {<p>Name: {user?.displayName}</p>}
                        <p>Email: {user?.email}</p>
                        {currentUser?.education && <p>Education: {currentUser?.education}</p>}
                        {currentUser?.location && <p>Location: {currentUser?.location}</p>}
                        {currentUser?.number && <p>Phone number: {currentUser?.number}</p>}
                        {currentUser?.linkedin && <p>Linkedin: {currentUser?.linkedin}</p>}
                    </div>
                </div>
                <div class="col-sm-6">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-3">
                            <label htmlFor="education" className="form-label">Education</label>
                            <input {...register("education", { required: true })} type="text" min="1" max="5" className="form-control" id="education" />
                            <p className='text-danger mt-2'>{errors.education && <span>Please input your education</span>}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">City/ District</label>
                            <input type='text' className="form-control" {...register("location", { required: true })} id="location" />
                            <p className='text-danger mt-2'>{errors.location && <span>Please input your location</span>}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="number" className="form-label">Phone Number</label>
                            <input type='number' className="form-control" {...register("number", { required: true })} id="number" />
                            <p className='text-danger mt-2'>{errors.number && <span>Please input your phone number</span>}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="linkedin" className="form-label">Linkedin</label>
                            <input type='text' className="form-control" {...register("linkedin", { required: true })} id="linkedin" />
                            <p className='text-danger mt-2'>{errors.linkedin && <span>Please input your linkedin link</span>}</p>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 w-lg-50">Login </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;