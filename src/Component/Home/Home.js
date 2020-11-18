import React from 'react';
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
        </div>
    );
};

export default Home;