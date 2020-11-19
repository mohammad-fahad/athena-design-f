import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinAlt } from '@fortawesome/free-regular-svg-icons';
import { faTrophy, faRocket, faSpa } from '@fortawesome/free-solid-svg-icons';
import './Achievement.css';

const Achievement = () => {
    return (
        <Row className='container-fluid my-5'>
            <Col lg={{ span: 3, offset: 1 }} md={{span: 10, offset: 1}} sm={{span: 10, offset: 1}} className='py-5 my-auto'>
                <h1 className='mb-4'>Our Achievements</h1>
                <p className='text-secondary'>It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letter. </p>
            </Col>
            <Col lg={{ span: 6, offset: 1 }} md={{span: 10, offset: 1}} className='p-0'>
                <Row className='p-0 m-0'>
                    <Col lg={6} md={6} sm={{span: 8, offset: 2}} className='p-0 mx-auto'>
                        <div className='d-flex justify-content-around fancy-card card-odd'>
                            <p className='my-auto display-3'><FontAwesomeIcon icon={faGrinAlt} /></p>
                            <div>
                                <h1>700+</h1>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={{span: 8, offset: 2}} className='p-0 mx-auto'>
                        <div className='d-flex justify-content-around fancy-card card-even'>
                            <p className='my-auto display-3'><FontAwesomeIcon icon={faTrophy} /></p>
                            <div>
                                <h1>140+</h1>
                                <p>Projects Completed</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={{span: 8, offset: 2}} className='p-0 mx-auto'>
                        <div className='d-flex justify-content-around fancy-card card-even'>
                            <p className='my-auto display-3'><FontAwesomeIcon icon={faSpa} /></p>
                            <div>
                                <h1>25+</h1>
                                <p>Crazy Minds</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={{span: 8, offset: 2}} className='p-0 mx-auto'>
                        <div className='d-flex justify-content-around fancy-card card-odd'>
                            <p className='my-auto display-3'><FontAwesomeIcon icon={faRocket} /></p>
                            <div>
                                <h1>75+</h1>
                                <p>Running Projects</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Achievement;