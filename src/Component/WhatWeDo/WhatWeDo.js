import React from 'react';
import '../../App.css';
import img1 from '../../resources/Group 65@2x.png';
import img2 from '../../resources/Group 66@2x.png';
import img3 from '../../resources/Group 69@2x.png';
import img4 from '../../resources/Group 72@2x.png';
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
        <div className='py-5 my-4 what-we-do'>
            <div className="text-center">
                <h1 className="specialTexts"><b>What We Do</b></h1>
                <p className='text-muted'>Our main focus is to make the User Experience very  <br />
                simple and easy. Simplicity is our Strength.</p>
            </div>

            <section className="px-5 mx-5">
                <Row>
                    {
                        fakeData.map(d => (
                            <Col xl={3} lg={4} md={6} sm={12}>                                
                                <div className="what-we-do-card py-3 mx-4 my-5" style={{ width: '18rem'}}>
                                    <div className="text-center">
                                        <img src={d.img} alt="" />
                                        <h5 className="mt-4">{d.name}</h5>
                                        <p className="px-3">{d.description}</p>
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