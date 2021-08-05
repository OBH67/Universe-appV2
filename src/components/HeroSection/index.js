import React from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, PWrap} from './HeroElements';
import {ButtonHero} from '../ButtonElement';
import {useTranslation} from "react-i18next"


const HeroSection = () => {
    const ActionClick = () => {
        window.location.href = 'https://pancakeswap.finance/swap'
    }

    const [t] = useTranslation("global");

   return (
        <HeroContainer id={'home'}>
            <HeroBg>
                <VideoBg />
            </HeroBg>
            <HeroContent>
                <HeroH1>UNIVERSE TOKEN</HeroH1>
                <PWrap>
                <HeroP>{t("header.usermessage")}</HeroP>
                </PWrap>
                <HeroBtnWrapper>
                    <ButtonHero onClick={ActionClick}>{t("header.button")}</ButtonHero>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
