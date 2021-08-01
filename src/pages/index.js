import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {homeObjOne} from '../components/infoSection/Data';
import {InfoObjTwo} from '../components/infoPage/Data'
import Footer from '../components/Footer';
import InfoPage from '../components/infoPage';
import TokenomicsPage from '../components/TokenomSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoPage {...InfoObjTwo} />
        <TokenomicsPage />
        <Footer />
        </>
    )
}

export default Home
