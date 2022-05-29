import React from 'react';

const SideNav = () => {
    return (
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Deshbord</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul>
                <li class="nav-item"><a class="nav-link" href="#">My Orders</a> </li>
                <li class="nav-item"><a class="nav-link" href="#">Add a Review</a></li>
                <li class="nav-item"><a class="nav-link" href="#">My Profile</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Manage all Orders</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Add a Product</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Make Admin</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Manage Products</a></li>
            </ul>
        </div>
    </div>
    );
};

export default SideNav;