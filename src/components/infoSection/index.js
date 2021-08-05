import React from 'react'
import {Button} from '../ButtonElement';
import { Doughnut } from 'react-chartjs-2';
import {data} from './Data'
import {useTranslation} from 'react-i18next';

import {
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Subtitle,
    BtnWrap,
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent
} from './InfoElements';

const InfoPage = ({
    imgStart, 
    lightText, 
    darkText, 
    primary,
    dark,
    dark2
    }) =>

    {
        const [t] = useTranslation("global");
    return (
        <>
        <HeroContainer id='about'>
          <HeroBg>
            <VideoBg/>
          </HeroBg>
          <HeroContent>
          <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <Heading lightText={lightText}>{t("infosection.headline")}</Heading>
                        <Subtitle darkText={darkText}>{t("infosection.description")}</Subtitle>
                        <BtnWrap>
                        <Button
                        to='home'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                        >
                        {t("infosection.button")}
                        </Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                        <Column2>
                    <Doughnut data={data} />
                        </Column2>
                </InfoRow>
            </InfoWrapper>
          </HeroContent>
        </HeroContainer>
        </>
    )
}

export default InfoPage
