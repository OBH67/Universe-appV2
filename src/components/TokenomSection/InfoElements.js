import styled from 'styled-components';
import image from '../../images/Logotipo.jpg';

export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`;

export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`;

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;

@media screen and (max-width: 768px) {
    width: 100%;
}
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`;

export const TopLine = styled.p`
color: #01bf71;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
background: linear-gradient(45deg, #98FB98, #1E90FF);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;

export const Subtitle = styled.p`
max-width: 400px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`;

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`;

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`;


export const HeroContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 957px;
position: relative;
z-index: 1;
`;

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const VideoBg = styled.div`
  /* Location of the image */
  background-image: url(${image});

  /* Image is centered vertically and horizontally at all times */
  background-position: center center;

  /* Image doesn't repeat */
  background-repeat: no-repeat;

  /* This is what makes the background image rescale based on its container's size */
  background-size: cover;

  /* Pick a solid background color that will be displayed while the background image is loading */
  background-color:#464646;

   background-attachment: fixed;

  /* SHORTHAND CSS NOTATION
   * background: url(background-photo.jpg) center center cover no-repeat fixed;
   */
   bottom: 40px;
   margin-top: -30px;
   height: 1000px;
`;

export const HeroContent = styled.div`
z-index: 1;
top: 50px;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const HeroH1 = styled.h1`
 -webkit-text-stroke-width: 3px;
-webkit-text-stroke-color: #fff;
text-transform: uppercase;
    background: linear-gradient(to right, #d10f59 0%, #30CFD0 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    font-size: 40px;
    text-align: center;
`;
