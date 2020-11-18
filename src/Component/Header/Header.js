import React from 'react';
import { Col, Row } from 'react-bootstrap';
import bg from '../../resources/16 [Converted]@2x.png';

const Header = () => {
    return (
        <Row className='py-5 container-fluid'>
            <Col lg={{ span: 4, offset: 1 }} md={{ span: 4, offset: 1 }} sm={{ span: 10, offset: 1 }} className="d-flex align-items-center">
                <div>
                    <h1 className='header-text'>Florence <br /> agency</h1>
                    <p style={{fontSize: '14px'}} className='py-4 text-muted'>Lorem Ipsum has been the industry's standard dummy text ever<br />
                        since the 1500s, when an unknown printer took a galley of type and<br />
                        scrambled it to make a type specimen book.</p>
                    <button className="btn common-btn px-4 py-2"><b>See Pricing</b></button>
                </div>
            </Col>
            <Col lg={{ span: 5, offset: 1 }} md={{ span: 6, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                <img className="img-fluid" src={bg} alt="" />
            </Col>
            <Col lg={1} md={0}></Col>
        </Row>
    );
};

export default Header;