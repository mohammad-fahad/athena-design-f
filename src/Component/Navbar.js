import React from 'react';
import logo from '../resources/Group 86.png';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light mt-3 px-5 mx-5">
                <img style={{ height: '12vh' }} src={logo} alt="" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mr-5">
                            <a className="nav-link " href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active mr-5">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item active mr-5">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active mr-5" href="#" tabindex="-1" aria-disabled="true">Pricing</a>
                        </li>
                        <button className="px-5 py-3 text-white common-btn"> <strong>Our Team</strong> </button>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;