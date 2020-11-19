import React from 'react';
import Achievement from '../Achievement/Achievement';
import ChooseTeam from '../ChooseTeam/ChooseTeam';
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
            <ChooseTeam />
        </div>
    );
};

export default Home;