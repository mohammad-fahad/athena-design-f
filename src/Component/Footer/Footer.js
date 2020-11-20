import React from 'react';
import img01 from '../../resources/Group 86.png';
import img02 from '../../resources/facebook-logo-in-circular-shape@2x.png';
import img03 from '../../resources/twitter (4)@2x.png';
import img04 from '../../resources/linkedin (2)@2x.png';
import img05 from '../../resources/dribbble (1)@2x.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid footer-section">
            <div className="footer-colum text-center">
                <div className="row">

                    <div className="col-sm colum ml-4 mb-3">
                        <div className="icons">
                            <img className="logo-img img-fluid" src={img01} alt="" />
                            <div className="d-flex social-icon mt-3">
                                <img className="img-fluid mr-4" src={img02} alt="" />
                                <img className="img-fluid mr-4" src={img03} alt="" />
                                <img className="img-fluid mr-4" src={img04} alt="" />
                                <img className="img-fluid" src={img05} alt="" />

                            </div>
                        </div>
                    </div>

                    <div className="col-sm colum ml-4 mb-3">
                        <li>Features</li>
                        <li>Enterprice</li>
                        <li>Pricing</li>
                    </div>
                    <div className="col-sm colum ml-4 mb-3">
                        <li>Blog</li>
                        <li>Help center</li>
                        <li>Contac Us</li>
                        <li>Status</li>
                    </div>
                    <div className="col-sm colum ml-4 mb-3">
                        <li>About Us</li>
                        <li>Terms of service</li>
                        <li>Security</li>
                        <li>Login</li>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;