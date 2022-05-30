import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div class="off_canves_button">
                <button class="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <i class="bi bi-person-fill"></i>
                </button>
            </div>
            <div class="container">

                <h3>DigiTech</h3>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/blogs">Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/portfolio">My porfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/login">Login</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link active dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link class="dropdown-item active" to="/dashboard">Dashboard</Link></li>
                                <li><button class="dropdown-item active">Logout</button></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;