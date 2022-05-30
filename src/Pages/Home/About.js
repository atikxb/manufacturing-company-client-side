import React from 'react';

const About = () => {
    return (
        <section id="Business" className="p-5">
            <div className="container">
                    <h1 className="text-center">About Us</h1>
                    <hr style={{width: '100px',margin: '-5px auto 40px auto',height: '2px', backgroundColor: 'black'}}/>
                <div className="row align-items-center">
                    <div className="col-lg-6">

                        <div className="content">
                            <h3>A small brief</h3>
                            <p>We are reknowned all over the world. we have been established in 1990. From then we are proudly doing business with honour. We manufacture any kind of computer parts. you can order in bulk for your business. We always assure the best quality. Order for the parts you need for.</p>
                        </div>
                        <div className="Business_text"></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="businnes_image">
                            <img src="./vendor/image/why-us.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;