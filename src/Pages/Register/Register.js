import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import ButtonSpinner from '../Loading/ButtonSpinner';
import SocialLogin from '../Login/SocialLogin';
import Header from '../Shared/Header/Header';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [token] = useToken(user);
    console.log(user?.user?.displayName);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setpasswordError] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [rePasswordError, setRePasswordError] = useState('');
    const handlePasswordOnBlur = e => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setpasswordError('Password must be 8 character or longer');
        }
        else { setpasswordError('');}

    }
    const handleRePasswordOnBlur = e => {
        if (password === e.target.value) {
            setRePassword(e.target.value);
            setRePasswordError('');
        }
        else { setRePasswordError('Both password did not match'); }

    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {//used useEffect to wait till currentUser and avoid browser router error
        token && navigate(from, { replace: true });
    }, [token, from, navigate]);
    const handleRegister = async e => {
        e.preventDefault();
        if (password.length > 8 && password === rePassword) {
            setRePasswordError('');
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName });
        }
    }
    return (
        <main>
            <Header />
            <section className="section-padding">
                <div className="container">
                    <h1 className="text-center">Register</h1>
                    <hr style={{ width: '50px', margin: '0px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="form shadow-sm p-5">
                                <form onSubmit={handleRegister}>

                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input onBlur={(e) => setDisplayName(e.target.value)} type="text" className="form-control" name="name" id="name" required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input onBlur={(e) => setEmail(e.target.value)} type="email" className="form-control" name="email" id="email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input onBlur={handlePasswordOnBlur} type="password" className="form-control" name="password" id="password" required />
                                        <p className='text-danger'>{passwordError}</p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="repassword" className="form-label">Retype Password</label>
                                        <input onBlur={handleRePasswordOnBlur} type="password" className="form-control" name="repassword" id="repassword" required />
                                        <p className='text-danger'>{rePasswordError}</p>
                                    </div>


                                    <button type="submit" className="btn btn-primary w-100">Register {loading && <ButtonSpinner />}</button>
                                    <p className='text-danger mt-2'>{error?.message}</p>
                                    <SocialLogin />
                                </form>

                                <p className="text-center mt-4">Have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Register;