import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, LinksNav} from './NavbarElement';
import {FaBars} from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Universe Token</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">Why Us?</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Tokenomics</NavLinks>
                    </NavItem>
                    <NavItem>
                       <LinksNav to='/roadmap'>Roadmap</LinksNav>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;
