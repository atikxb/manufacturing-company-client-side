import React from 'react';

const SideNav = () => {
    return (
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Deshbord</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <ul>
                <li className="nav-item"><a className="nav-link" href="#">My Orders</a> </li>
                <li className="nav-item"><a className="nav-link" href="#">Add a Review</a></li>
                <li className="nav-item"><a className="nav-link" href="#">My Profile</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Manage all Orders</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Add a Product</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Make Admin</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Manage Products</a></li>
            </ul>
        </div>
    </div>
    );
};

export default SideNav;