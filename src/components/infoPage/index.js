import React from 'react'
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


function InfoPage({
    lightBg, 
    id, 
    imgStart, 
    lightText, 
    headline, 
    darkText, 
    description,
    img, 
    alt
    })

    {
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
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
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