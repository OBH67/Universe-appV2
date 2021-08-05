import image from '../../images/svg5.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Universe Token',
    headline: '¿Why Invest in Universe Token?',
    description: 'The tokens collected from the BuyBack tax are converted into BNB and safely stored in our contract. This BNB cannot be withdrawn and is used later to buy tokens on the open market and distribute them to "Universe Token" holders.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: image,
    alt: 'universe',
    dark: true,
    primary: true,
    darkText: false
};

export const data = {
    labels: ['Burn', 'Liquidity'],
    datasets: [
      {
        label: '# of Votes',
        data: [40, 40],
        backgroundColor: [
          '#1E90FF',
          '#DC143C',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          '#1E90FF',
          '#DC143C',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  export const areas = [{
    country: 'Liquidity',
    area: 12
  }, {
    country: 'Burn',
    area: 7
  }];


  
export const sampleData = [
  { name: 'Buy Back', value: 3, text: '3%' }, 
  { name: 'Marketing', value: 3, text: '3%' },
  { name: 'Reflexions', value: 10, text: '10%' },
];