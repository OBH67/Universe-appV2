import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {
    InfoContainer, 
    InfoWrapper,
    InfoRow,
    Column1,
    Column2
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

function TokenomicsPage({
    imgStart,
    })

    {
    return (
        <>
        <InfoContainer id='services'>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <h1>Buy Tax - 15%</h1>
                        <Doughnut data={data} />
                    </Column1>
                    <Column2>
                    <h1>Sell Tax - 15%</h1>
                        <Doughnut data={data} />
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    )
}

export default TokenomicsPage