import React from 'react'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink>How it works</FooterLink>
                                <FooterLink>Careers</FooterLink>
                                <FooterLink>Investors</FooterLink>
                                <FooterLink>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                                <FooterLink>Contact</FooterLink>
                                <FooterLink>Support</FooterLink>
                                <FooterLink>Destinations</FooterLink>
                                <FooterLink>Sponsorships</FooterLink>
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
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
