import React from 'react';
import Header from '../Shared/Header/Header';

const NotFound = () => {
    return (
        <main>
            <Header />
            <div style={{ height: '80vh' }} className='section-padding'>
                <img className="m-auto d-block" width='100%' src="./vendor/image/404.png" alt="not found" />
                <h3 className="text-center">Page Not Found</h3>
            </div>
        </main>
    );
};

export default NotFound;