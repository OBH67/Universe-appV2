import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';
import {
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink, 
    SocialMedia, 
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights, 
    SocialIcons,
    SocialIconLink
    } from './FooterElements';

    import {useTranslation} from 'react-i18next'

const Footer = () => {
    const [t] = useTranslation("global");

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>{t("footer.about")}</FooterLinkTitle>
                                <FooterLink>{t("footer.works")}</FooterLink>
                                <FooterLink>{t("footer.carrer")}</FooterLink>
                                <FooterLink>{t("footer.investor")}</FooterLink>
                                <FooterLink>{t("footer.terms")}</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>{t("footer.contactus")}</FooterLinkTitle>
                                <FooterLink>{t("footer.contact")}</FooterLink>
                                <FooterLink>{t("footer.support")}</FooterLink>
                                <FooterLink>{t("footer.destination")}</FooterLink>
                                <FooterLink>{t("footer.sponsor")}</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink>Instagram</FooterLink>
                                <FooterLink>Facebook</FooterLink>
                                <FooterLink>Youtube</FooterLink>
                                <FooterLink>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Universe Token</SocialLogo>
                        <WebsiteRights>
                            Universe Token {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.facebook.com/UniverseToken/' target='_black' aria-label='Facebook'><FaFacebook/></SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com/universetoken/' target='_black' aria-label='Instagram'><FaInstagram/></SocialIconLink>
                            <SocialIconLink href='https://twitter.com/universe_token' target='_black' aria-label='Twitter'><FaTwitter/></SocialIconLink>
                            <SocialIconLink href='https://t.me/ut_esp' target='_black' aria-label='Telegram'><FaTelegram/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
