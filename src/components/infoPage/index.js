import React from 'react'
import {useTranslation} from 'react-i18next';
import {
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Subtitle,
    ImgWrap,
    Img,
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    
} from './InfoElements';


const InfoPage = ({
    lightBg, 
    id, 
    imgStart, 
    lightText, 
    darkText, 
    img, 
    alt
    }) => {
        const [t] = useTranslation("global");

    return (
        <>
        <HeroContainer lightBg={lightBg} id={id}>
        <HeroBg>
            <VideoBg/>
        </HeroBg>
        <HeroContent>
        <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <Heading lightText={lightText}>{t("infopage.headline")}</Heading>
                        <Subtitle darkText={darkText}>{t("infopage.description")}</Subtitle>
                    </TextWrapper>
                    </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </HeroContent>
        </HeroContainer>
        </>
    )
}

export default InfoPage