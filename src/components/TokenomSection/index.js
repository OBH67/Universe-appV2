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
  HeroContent,
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
            <div class="slider">
              <input
                type="radio"
                name="slider"
                title="slide1"
                checked="checked"
                class="slider__nav"
              />
              <input
                type="radio"
                name="slider"
                title="slide2"
                class="slider__nav"
              />
              <div class="slider__inner">
                <div class="slider__contents">
                  <i class="slider__image fa fa-codepen"></i>
                  <h2 class="slider__caption">2%</h2>
                  <p class="slider__txt">REWARDS TO HOLDERS</p>
                </div>
                <div class="slider__contents">
                  <i class="slider__image fa fa-newspaper-o"></i>
                  <h2 class="slider__caption">6%</h2>
                  <p class="slider__txt">BUY-BACK TAX</p>
                </div>
                <div class="slider__contents"></div>
                <div class="slider__contents"></div>
              </div>
            </div>
          </InfoWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default TokenomicsPage;
