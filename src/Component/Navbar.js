import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../resources/Group 86.png';
import '../App.css';


const Navbar = () => {
    return (
        <Row className='container-fluid navbar__bg'>
            <Col md={1}></Col>
            <Col md={10}>
                <nav className="navbar navbar-expand-lg navbar-light  bg-transparent mt-2">
                    <img style={{ height: '12vh' }} src={logo} alt="" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active mr-lg-5 mx-auto">
                                <a className="nav-link " href="#">Home</a>
                            </li>
                            <li className="nav-item active mr-lg-5 mx-auto">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item active mr-lg-5 mx-auto">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item active mr-lg-5 mx-auto">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <button className="px-5 py-3 mx-auto text-white common-btn"> <strong>Our Team</strong> </button>
                        </ul>
                    </div>
                </nav>
            </Col>
        </Row>
    );
};

export default Navbar;