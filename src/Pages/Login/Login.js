import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import 'react-toastify/dist/ReactToastify.css';
import ButtonSpinner from '../Loading/ButtonSpinner';
import Header from '../Shared/Header/Header';
import SocialLogin from './SocialLogin';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard';
    useEffect(() => {//used useEffect to wait till currentUser and avoid browser router error
        token && navigate(from, { replace: true });
    }, [token, from, navigate]);
    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <main>
            <Header />
            <section className="section-padding">
                <div className="container">
                <h1 className="text-center">Login</h1>
                    <hr style={{width: '50px',margin: '0px auto 40px auto',height: '2px', backgroundColor: 'black'}}/>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="form shadow-sm p-5">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="mb-3">
                                        <label htmlhtmlFor="email" className="form-label">Email</label>
                                        <input {...register("email", { required: true, pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i })} type="email" className="form-control" id="email" />
                                        <p className='text-danger mt-2'>{errors.email && <span>Please input a valid email</span>}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlhtmlFor="password" className="form-label">Password</label>
                                        <input {...register("password", { required: true })} type="password" className="form-control" id="password" />
                                        <p className='text-danger mt-2'>{errors.password && <span>Please input the password</span>}</p>
                                    </div>


                                    <button type="submit" className="btn btn-primary w-100 w-lg-50">Login {loading && <ButtonSpinner />}</button> <p className='text-danger mt-2'>{error?.message}</p>
                                    <SocialLogin />
                                </form>
                                <p className="text-center mt-4">Need an account? <Link to="/register">Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;