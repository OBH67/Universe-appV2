import React from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import {ButtonHero} from '../ButtonElement';

const HeroSection = () => {

async function Connection() {
    console.log('hello world')
}

    return (
        <HeroContainer id={'home'}>
            <HeroBg>
                <VideoBg />
            </HeroBg>
            <HeroContent>
                <HeroH1>UNIVERSE TOKEN</HeroH1>
                <HeroP>
                The best decentralized community on the Binance Smart Chain, join and explore the Universe...
                </HeroP>
                <HeroBtnWrapper>
                    <ButtonHero onClick={Connection}>Buy Token</ButtonHero>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
