import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Portfolio = () => {
    return (
        <main>
            <Header />
            <section>
                <div class="container py-5">
                    <h1 class="text-center">About Me</h1>
                    <hr style={{ width: '100px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
                    <div class="row  align-items-center">
                        <div class="col-lg-6">
                            <div class="content">
                                <h3>Mohammad Atikul Islam</h3>
                                <p>Education: BSc in CSE from AIUB</p>
                                <p>Email: atikxb@gmail.com</p>
                                <p>Phone: 01764760765</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <h4 className='text-center'>Skills</h4>
                            <div class="row">
                                <div class="col-sm-6">
                                    <ul class="list-group">
                                        <li class="list-group-item">HTML5</li>
                                        <li class="list-group-item">CSS3</li>
                                        <li class="list-group-item">Bootstrap</li>
                                        <li class="list-group-item">Javascript</li>
                                        <li class="list-group-item">Jquery</li>
                                        <li class="list-group-item">Jquery</li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul class="list-group">
                                        <li class="list-group-item">React JS</li>
                                        <li class="list-group-item">Node JS</li>
                                        <li class="list-group-item">Express JS</li>
                                        <li class="list-group-item">MongoDB</li>
                                        <li class="list-group-item">Firebase</li>
                                        <li class="list-group-item">Typescript</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="container py-5">
                    <h1 class="text-center">Portolio</h1>
                    <hr style={{ width: '100px', margin: '-5px auto 40px auto', height: '2px', backgroundColor: 'black' }} />
                    <div class="row">
                        <div class="col-sm-4">
                            <a href='https://grocery-inventory-website.web.app/'><img src="./vendor/image/ss1.jpg" alt="portfolio" width='100%'/></a>
                        </div>
                        <div class="col-sm-4">
                            <a href='https://fitness-matter.web.app/'><img src="./vendor/image/ss2.jpg" alt="portfolio" width='100%'/></a>
                        </div>
                        <div class="col-sm-4">
                            <a href='https://camera-world-analysis.netlify.app/'><img src="./vendor/image/ss3.jpg" alt="portfolio" width='100%'/></a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Portfolio;