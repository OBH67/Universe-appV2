import React from 'react'
import {Button} from '../ButtonElement';
import { Doughnut } from 'react-chartjs-2';

import {
    InfoContainer, 
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent
} from './InfoElements';

const data = {
    labels: ['Burn', 'Liquidity'],
    datasets: [
      {
        label: '# of Votes',
        data: [5, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  
function InfoPage({
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description,
    buttonLabel, 
    primary,
    dark,
    dark2
    })

    {
    return (
        <>
        <HeroContainer id='about'>
          {/* <HeroBg>
            <VideoBg/>
          </HeroBg> */}
          <HeroContent>
          <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
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
                        >{buttonLabel}</Button>
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
