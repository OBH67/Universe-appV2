import React from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './HeroElements';
import {ButtonHero} from '../ButtonElement';


const HeroSection = () => {
    const ActionClick = () => {
        window.location.href = 'https://pancakeswap.finance/swap'
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
                    <ButtonHero onClick={ActionClick}>Buy Token</ButtonHero>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
