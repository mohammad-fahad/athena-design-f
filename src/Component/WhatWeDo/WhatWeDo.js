import React from 'react';
import img1 from '../../resources/Group 65@2x.png';
import img2 from '../../resources/Group 66@2x.png';
import img3 from '../../resources/Group 69@2x.png';
import img4 from '../../resources/Group 72@2x.png';
import '../../App.css';

const fakeData = [
    {
        name: 'Experience Design', description: " The point of using Lorem Ipsum is that it has a more- orless normal.", img: img1
    },
    { name: 'Interface Design', description: "The point of using Lorem Ipsum is that it has a more- orless normal.", img: img2 },
    { name: 'Prototyping', description: "The point of using Lorem Ipsum is that it has a more- orless normal.", img: img3 },
    { name: 'Illustration', description: "The point of using Lorem Ipsum is that it has a more- orless normal.", img: img4 }
];
const WhatWeDo = () => {
    return (
        <div>
            <div className="text-center mt-5">
                <h1 className="specialTexts">What We Do</h1>
                <p className='text-muted'>Our main focus is to make the User Experience very  <br />
                simple and easy. Simplicity is our Strength.</p>
            </div>
            <div className='d-flex flex-wrap justify-content-center'>
                {
                    fakeData.map(d => <div className="card m-5" style={{ width: '18rem', border: 'none' }}>
                        <div className="card-body text-center">
                            <img src={d.img} alt="" />
                            <h5 className="card-title mt-4">{d.name}</h5>
                            <p className="card-text">{d.description}</p>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WhatWeDo;