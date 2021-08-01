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
top: 200px;
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`;

export const Column1 = styled.div`
margin-top: 100px;
padding: 0 15px;
grid-area: col1;
`;

export const Column2 = styled.div`
margin-top: 100px;
padding: 0 15px;
grid-area: col2;
@media screen and (max-width: 720px) {
    margin-top: 40px;
}
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`;

export const HeroH1 = styled.h1`
	text-transform: uppercase;
    background: linear-gradient(45deg, #98FB98, #1E90FF);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-size: 30px;
    text-align: center;

@media screen and (max-width: 768px) {
    font-size: 20px;
}

@media screen and (max-width: 480px) {
    font-size: 20px;
}
`;

export const HeroContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 967px;
position: relative;
z-index: 1;

@media screen and (max-width: 768px) {
height: 1200px;
}

@media screen and (max-width: 480px) {

}
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
   height: 1300px;
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