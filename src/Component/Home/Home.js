import React from 'react';
import Achievement from '../Achievement/Achievement';
import Header from '../Header/Header';
import Navbar from '../Navbar';
import StayRunning from '../StayRunning/StayRunning';
import WhatWeDo from '../WhatWeDo/WhatWeDo';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <WhatWeDo />
            <StayRunning />
            <Achievement />
        </div>
    );
};

export default Home;