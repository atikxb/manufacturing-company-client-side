import React from 'react';
import Header from '../Shared/Header/Header';

const NotFound = () => {
    return (
        <main>
            <Header/>
        <section style={{padding: '200px 0'}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="not-found text-center">
                            <h1>404</h1>
                            <h4>Not Found</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    );
};

export default NotFound;