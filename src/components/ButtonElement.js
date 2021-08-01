import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
border-radius: 50px;
background: linear-gradient(45deg, #1E90FF, #98FB98);
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
color: black;

&:hover {
    transition: all 0.2s ease-in-out;
    background: linear-gradient(45deg, #1E90FF, #98FB98);
}
`;


export const ButtonHero = styled.button`
background-image: linear-gradient(to right, #1A2980 0%, #26D0CE  51%, #1A2980  100%);
margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;

&:hover {
    background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
}
`;