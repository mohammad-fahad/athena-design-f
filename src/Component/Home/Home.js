import React from 'react';
import Achievement from '../Achievement/Achievement';
import ChooseTeam from '../ChooseTeam/ChooseTeam';
import Footer from '../Footer/Footer';
import GetDesign from '../GetDesign/GetDesign';
import Header from '../Header/Header';
import Navbar from '../Navbar';
import StayRunning from '../StayRunning/StayRunning';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="bg-top m-0 p-0">
                <Navbar/>
                <Header />
            </div>
            <WhatWeDo />
            <StayRunning />
            <Achievement />
            <ChooseTeam />
            <GetDesign />
            <Footer />
        </>
    );
};

export default Home;