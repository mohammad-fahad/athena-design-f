import React from 'react';
import '../../App.css';
import img1 from '../../resources/Group 65@2x.png';
import img2 from '../../resources/Group 66@2x.png';
import img3 from '../../resources/Group 69@2x.png';
import img4 from '../../resources/Group 72@2x.png';
import bg from '../../resources/bd-rope.png';
import '../../App.css';
import { Col, Row } from 'react-bootstrap';

const fakeData = [
    { name: 'Experience Design', description: " The point of using Lorem Ipsum is that it has a more- orless normal.", img: img1 },
    { name: 'Interface Design', description: "The point of using Lorem Ipsum is that it has a more- orless normal.", img: img2 },
    { name: 'Prototyping', description: "The point of using Lorem Ipsum is that it has a more- orless normal.", img: img3 },
    { name: 'Illustration', description: "The point of using Lorem Ipsum is that it has a more- orless normal.", img: img4 }
];
const WhatWeDo = () => {
    return (
        <div style={{ backgroundColor: '#FAFFFD' }}>
            <div className="text-center mt-5">
                <h1 className="specialTexts">What We Do</h1>
                <p className='text-muted'>Our main focus is to make the User Experience very  <br />
                simple and easy. Simplicity is our Strength.</p>
            </div>

            <section className="px-5 mx-5 rope" style={{ backgroundColor: '#FAFFFD' }}>
                <Row className="position: 'absolute'">
                    {
                        fakeData.map(d => (
                            <Col xl={3} lg={4} md={6} sm={12}>                                
                                <div className="card effect py-3 mx-4 my-5" style={{ width: '18rem', border: 'none', backgroundColor: '#FAFFFD', }}>
                                    <div className="card-body text-center">
                                        <img src={d.img} alt="" />
                                        <h5 className="card-title mt-4">{d.name}</h5>
                                        <p className="card-text">{d.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </section>
        </div >

    );
};

export default WhatWeDo;