import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Portfolio = () => {
    return (
        <main>
            <Header />
            <section>
                <div className="container py-5">
                    <h1 className="text-center">About Me</h1>
                    <hr style={{ width: '100px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
                    <div className="row  align-items-center">
                        <div className="col-lg-6">
                            <div className="content">
                                <h3>Mohammad Atikul Islam</h3>
                                <p>Email: atikxb@gmail.com</p>
                                <p>Phone: 01764760765</p>
                                <p>Education: BSc in CSE from AIUB</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h4 className='text-center'>Skills</h4>
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-group">
                                        <li className="list-group-item">HTML5</li>
                                        <li className="list-group-item">CSS3</li>
                                        <li className="list-group-item">Bootstrap</li>
                                        <li className="list-group-item">Javascript</li>
                                        <li className="list-group-item">Jquery</li>
                                        <li className="list-group-item">Jquery</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-group">
                                        <li className="list-group-item">React JS</li>
                                        <li className="list-group-item">Node JS</li>
                                        <li className="list-group-item">Express JS</li>
                                        <li className="list-group-item">MongoDB</li>
                                        <li className="list-group-item">Firebase</li>
                                        <li className="list-group-item">Typescript</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container py-5">
                    <h1 className="text-center">Portolio</h1>
                    <hr style={{ width: '100px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
                    <div className="row">
                        <div className="col-sm-4">
                            <a href='https://grocery-inventory-website.web.app/'><img src="./vendor/image/ss1.jpg" alt="portfolio" width='100%'/></a>
                        </div>
                        <div className="col-sm-4">
                            <a href='https://fitness-matter.web.app/'><img src="./vendor/image/ss2.jpg" alt="portfolio" width='100%'/></a>
                        </div>
                        <div className="col-sm-4">
                            <a href='https://camera-world-analysis.netlify.app/'><img src="./vendor/image/ss3.jpg" alt="portfolio" width='100%'/></a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Portfolio;