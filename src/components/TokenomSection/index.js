import React from "react";
import { Doughnut } from "react-chartjs-2";
import { data } from "./CharData";
import {
  InfoWrapper,
  InfoRow,
  Column1,
  HeroH1,
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent
} from "./InfoElements";
import './Style.css'

function TokenomicsPage({ imgStart }) {
  return (
    <>
      <HeroContainer id="tokenomics">
        <HeroBg>
          <VideoBg />
        </HeroBg>
        <HeroContent>
        <div className="cards">
        <div className="card shadow">
        <ul className="item-ul">
          <li className="pack">Presale</li>
          <li id="master" className="price bottom-bar">?</li>
        </ul>
      </div>
      <div className="card shadow">
        <ul className="item-ul">
          <li className="pack">Liquidity</li>
          <li id="basic" className="price bottom-bar">?</li>
        </ul>
      </div>
      <div className="card active">
        <ul className="item-ul">
          <li className="pack">Total Supply</li>
          <li id="professional" className="price bottom-bar">?</li>
        </ul>
      </div>
      <div className="card shadow">
        <ul className="item-ul">
          <li className="pack">Dev Wallet</li>
          <li id="master" className="price bottom-bar">?</li>
        </ul>
      </div>
            <div className="card shadow">
        <ul className="item-ul">
          <li className="pack">Marketing</li>
          <li id="master" className="price bottom-bar">?</li>
        </ul>
      </div>
    </div>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <HeroH1>Buy/Sell Tax - 15%</HeroH1>
                <Doughnut data={data} />
              </Column1>
            </InfoRow>
          </InfoWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default TokenomicsPage;
