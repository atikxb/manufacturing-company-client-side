import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../Loading/Loading';

const SideNav = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (loading || adminLoading) { return <Loading></Loading> }
    return (
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Dashbord</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul>
                    <li className="nav-item"><Link className="nav-link" to="/dashboard">My Profile</Link> </li>
                    {
                        admin ? <>
                        <li className="nav-item"><Link className="nav-link" to="/dashboard/manage-all-products">Manage all Orders</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/dashboard/add-product">Add a Product</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/dashboard/make-admin">Make Admin</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/dashboard/manage-products">Manage Products</Link></li>
                    </> : <>
                    <li className="nav-item"><Link className="nav-link" to="/dashboard/add-review">Add a Review</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="myorders">My Orders</Link></li>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default SideNav;