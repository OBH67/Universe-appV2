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
import SidebarTranslate from '../components/Translatebar';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const [translateOpen, setTranslateOpen] = useState(false);

    const translate = () => {
        setTranslateOpen(!translateOpen);
    }


    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} translate={translate} />
        <SidebarTranslate translateOpen={translateOpen} translate={translate} />
        <Navbar toggle={toggle} translate={translate} />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoPage {...InfoObjTwo} />
        <TokenomicsPage />
        <Footer />
        </>
    )
}

export default Home
