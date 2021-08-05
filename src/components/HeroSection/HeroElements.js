import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import image from '../../images/Logotipo.jpg'

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
background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px 50px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  padding: 20px 40px;

z-index: 1;
top: 200px;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 768px) {
    top: 200px;
}
`;

export const HeroH1 = styled.h1`
 -webkit-text-stroke-width: 3px;
-webkit-text-stroke-color: #fff;
text-transform: uppercase;
    background: linear-gradient(to right, #d10f59 0%, #30CFD0 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    font-size: 100px;
    text-align: center;

@media screen and (max-width: 768px) {
    font-size: 60px;
}

@media screen and (max-width: 480px) {
    font-size: 60px;
}
`;

export const PWrap = styled.div`
display: flex;
justify-content: center;
`;

export const HeroP = styled.p`
margin-top: 24px;
background: linear-gradient(45deg, #1E90FF, #98FB98);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-align: center;
font-size: 40px;
text-align: center;
max-width: 800px;

@media screen and (max-width: 768px) {
    font-size: 30px;
}

@media screen and (max-width: 480px) {
    font-size: 30px;
}
`;

export const HeroBtnWrapper = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;