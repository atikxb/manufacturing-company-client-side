import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import SideNav from '../Shared/SideNav/SideNav';

const Dashboard = () => {
    return (
        <main>
            <Header />
            <SideNav />
            <div class="container">
            <div className="off_canves_button">
                <button className="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <i class="bi bi-list"></i> Dashboard Menu
                </button>
            </div>
            </div>
            <Outlet />
        </main>
    );
};

export default Dashboard;