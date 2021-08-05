import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap } from './TranslateElements';
import {useTranslation} from 'react-i18next';

const SidebarTranslate = ({ translateOpen, translate}) => {

const [t, i18n] = useTranslation("global");

    return (
     <SidebarContainer translateOpen={translateOpen} onClick={translate}>
         <Icon onClick={translate}>
             <CloseIcon />
         </Icon>
         <SidebarWrapper>
             <SidebarMenu>
                <SidebarLink onClick={(() => i18n.changeLanguage("es"))}>
                <p onClick={translate}>{t("languages.es")}</p>
                </SidebarLink>
                <SidebarLink onClick={(() => i18n.changeLanguage("eu"))}>
                <p onClick={translate}>{t("languages.eu")}</p>
                </SidebarLink>
                <SidebarLink onClick={(() => i18n.changeLanguage("eu"))}>
                <p onClick={translate}>{t("languages.ch")}</p>
                </SidebarLink>
             </SidebarMenu>
             <SideBtnWrap>
             </SideBtnWrap>
         </SidebarWrapper>
     </SidebarContainer>
    )
}

export default SidebarTranslate
