import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import ButtonSpinner from '../../Loading/ButtonSpinner';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div className="off_canves_button">
                <button className="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i className="bi bi-person-fill"></i>
                </button>
            </div>
            <div className="container">

                <h3>DigiTech</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/portfolio">My porfolio</Link>
                        </li>
                        {
                            loading ? <ButtonSpinner /> : <>
                                {
                                    user ? <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Welcome, {user?.displayName || user?.email}
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
                                            <li><button onClick={() => logOut(auth)} className="dropdown-item">Logout</button></li>
                                        </ul>
                                    </li> : <li className="nav-item">
                                        <Link className="nav-link active" to="/login">Login</Link>
                                    </li>
                                }

                            </>
                        }
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;