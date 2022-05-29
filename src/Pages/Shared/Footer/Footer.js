import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer">

            <div class="footer-top">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-3 col-md-6 footer-contact">
                            <h3>DigiTech</h3>
                            <p>
                                A108 Adam Street <br /> New York, NY 535022<br /> United States <br /><br />
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>
                        </div>

                        <div class="col-lg-2 col-md-6 footer-links">
                            <h4>Parts Categories</h4>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i> CPU</li>
                                <li><i class="bx bx-chevron-right"></i> Ram</li>
                                <li><i class="bx bx-chevron-right"></i> HDD</li>
                                <li><i class="bx bx-chevron-right"></i> GPU</li>
                                <li><i class="bx bx-chevron-right"></i> Motherboard</li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i> Terms & condition</li>
                                <li><i class="bx bx-chevron-right"></i> Privacy policy</li>
                                <li><i class="bx bx-chevron-right"></i> Delivery policy</li>
                                <li><i class="bx bx-chevron-right"></i> Refund policy</li>
                                <li><i class="bx bx-chevron-right"></i> Contact Us</li>
                            </ul>
                        </div>

                        <div class="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Reach Us</h4>
                            <p>Send your email address. We will contact you with future updates</p>
                            <form>
                                <input type="email" name="email" /><input type="submit" value="Send" className='bg-warning'/>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <center>
                <div class="container py-4">
                    <div class="social-links text-center text-md-right pt-3 pt-md-0">
                        <Link to="/" class="facebook"><i class="bi bi-facebook text-warning"></i></Link>
                        <Link to="/" class="twitter"><i class="bi bi-twitter text-warning"></i></Link>
                        <Link to="/" class="instagram"><i class="bi bi-instagram text-warning"></i></Link>
                        <Link to="/" class="google-plus"><i class="bi bi-google text-warning"></i></Link>
                        <Link to="/" class="linkedin"><i class="bi bi-linkedin text-warning"></i></Link>
                    </div>
                </div>
            </center>
        </footer>
    );
};

export default Footer;