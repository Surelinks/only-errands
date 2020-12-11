import React from 'react'
import{animateScroll as scroll} from 'react-scroll'; 
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,
FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap,
SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
           <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About US</FooterLinkTitle>
                                <FooterLink to='/signin'>About Us</FooterLink>
                                <FooterLink to='/signin'>How It Works </FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service </FooterLink>     
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About US</FooterLinkTitle>
                                <FooterLink to='/signin'>About Us</FooterLink>
                                <FooterLink to='/signin'>How It Works </FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service </FooterLink>     
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About US</FooterLinkTitle>
                                <FooterLink to='/signin'>About Us</FooterLink>
                                <FooterLink to='/signin'>How It Works </FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service </FooterLink>     
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About US</FooterLinkTitle>
                                <FooterLink to='/signin'>About Us</FooterLink>
                                <FooterLink to='/signin'>How It Works </FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service </FooterLink>     
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>  
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>
                            dolla c {new Date().getFullYear()}
                            All Right Reserved
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank'
                            aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'
                            aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'
                            aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'
                            aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank'
                            aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia> 
            </FooterWrap> 
        </FooterContainer>
    )
}

export default Footer
