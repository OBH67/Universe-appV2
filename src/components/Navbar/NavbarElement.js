import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
height: 98px;
margin-top: -100px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    height: 80px;
}

`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
	text-transform: uppercase;
    background: linear-gradient(to right, #d10f59 0%, #30CFD0 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 3px solid #01bf71;
}
`;

export const LinksNav = styled(LinkR)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 3px solid #01bf71;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`;

export const NavBtnLink = styled.button`
background-image: linear-gradient(to right, #005C97 0%, #363795  51%, #005C97  100%);
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
    transition: all 0.2s ease-in-out;
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
`;

