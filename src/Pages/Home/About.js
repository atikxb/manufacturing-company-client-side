import React from 'react';

const About = () => {
    return (
        <section id="Business" class="p-5">
            <div class="container">
                    <h1 class="text-center">About Us</h1>
                    <hr style={{width: '100px',margin: '-5px auto 40px auto',height: '2px', backgroundColor: 'black'}}/>
                <div class="row align-items-center">
                    <div class="col-lg-6">

                        <div class="content">
                            <h3>A small brief</h3>
                            <p>We are reknowned all over the world. we have been established in 1990. From then we are proudly doing business with honour. We manufacture any kind of computer parts. you can order in bulk for your business. We always assure the best quality. Order for the parts you need for.</p>
                        </div>
                        <div class="Business_text"></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="businnes_image">
                            <img src="./vendor/image/why-us.jpg" class="img-fluid" alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;