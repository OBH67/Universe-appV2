import React from 'react';
import {TranslateIcon, SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap } from './SidebarElements';
import {useTranslation} from 'react-i18next';

const Sidebar = ({ isOpen, toggle, translate}) => {

    const [t] = useTranslation("global");
    return (
     <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle}>
             <CloseIcon />
         </Icon>
         <SidebarWrapper>
             <SidebarMenu>
                <SidebarLink onClick={toggle} to='about'>
                {t("navbar.first-item")}
                </SidebarLink>
                <SidebarLink onClick={toggle} to='discover'>
                {t("navbar.second-item")}
                </SidebarLink>
                <SidebarLink onClick={toggle} to='tokenomics'>
                {t("navbar.third-item")}
                </SidebarLink>
                <SidebarLink onClick={translate}>
                <TranslateIcon />
                </SidebarLink>
             </SidebarMenu>
             <SideBtnWrap>
             </SideBtnWrap>
         </SidebarWrapper>
     </SidebarContainer>
    )
}

export default Sidebar
