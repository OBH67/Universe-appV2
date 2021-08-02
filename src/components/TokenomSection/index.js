import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./Style.css";
import { data } from "./CharData";
import {
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  HeroH1,
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent
} from "./InfoElements";

function TokenomicsPage({ imgStart }) {
  return (
    <>
      <HeroContainer id="services">
        <HeroBg>
          <VideoBg />
        </HeroBg>
        <HeroContent>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <HeroH1>Buy Tax - 15%</HeroH1>
                <Doughnut data={data} />
              </Column1>
              <Column2>
              <HeroH1>Sell Tax - 15%</HeroH1>
                <Doughnut data={data} />
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default TokenomicsPage;
