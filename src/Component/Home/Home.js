import React from 'react';
import Achievement from '../Achievement/Achievement';
import ChooseTeam from '../ChooseTeam/ChooseTeam';
import Footer from '../Footer/Footer';
import GetDesign from '../GetDesign/GetDesign';
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
            <GetDesign />
            <Footer />
        </div>
    );
};

export default Home;