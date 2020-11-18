import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../resources/20 [Converted]@2x.png';
import './StayRunning.css';

const StayRunning = () => {
    return (
        <Row className='py-5 container-fluid stay-running'>
            <Col lg={{ span: 5, offset: 1 }} md={{ span: 6, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                <img className="img-fluid" src={img} alt="" />
            </Col>
            <Col lg={{ span: 4, offset: 1 }} md={{ span: 4, offset: 1 }} sm={{ span: 10, offset: 1 }} className="d-flex align-items-center">
                    <div>
                        <h1>STAY RUNNING & Project</h1>
                        <p className='py-4 text-muted'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                        <button className="common-btn">See Pricing</button>
                    </div>
            </Col>
            <Col lg={1} md={0}></Col>
        </Row>
    );
};

export default StayRunning;