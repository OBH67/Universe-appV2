import React from 'react'
import {Icon, TranslateIcon, Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElement';
import {FaBars} from 'react-icons/fa';
import {useTranslation} from 'react-i18next';

const Navbar = ({toggle, translate}) => {
    const [t] = useTranslation("global");
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
                        <NavLinks to="about">{t("navbar.first-item")}</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">{t("navbar.second-item")}</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="tokenomics">{t("navbar.third-item")}</NavLinks>
                    </NavItem>
                    <NavItem>
                    <TranslateIcon onClick={translate}>
                        <Icon />
                    </TranslateIcon>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;
