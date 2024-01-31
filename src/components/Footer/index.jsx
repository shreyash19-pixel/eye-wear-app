import React from 'react'
import { CompanyEmail, CompanyLogoWrap, FooterLinks, FooterLinksContainer, FooterLinksTitle, FooterLinksTitleWrap, FooterLinksWrap, FooterWrap, PersonalInfoWrap } from '../../styles/Footer'
import { CompanyName } from '../../styles/Nav'


const Footer = () => {

    const navlinks = [
        {title : "Home", link1 : "About Us", link2 : "Programs", link3 : "Apps"},
        {title : "Resources", link1 : "Contact Us", link2 : "FAQ", link3 : "Featured"},
        {title : "Legal", link1 : "Privacy policy", link2 : "Terms & Conditions"},
    ]
  return (
    <FooterWrap id = "Contact">
        <PersonalInfoWrap>
            <CompanyLogoWrap>
               <CompanyName>Focal</CompanyName>
            </CompanyLogoWrap>
            <CompanyEmail>
                Hello@focal.mail.com
            </CompanyEmail>
            <CompanyEmail>
                028-231-311-095
            </CompanyEmail>
        </PersonalInfoWrap>
        <FooterLinksContainer>
            {navlinks.map((link) => (
            <FooterLinksWrap>
                <FooterLinksTitleWrap>
                    <FooterLinksTitle>
                       {link.title}
                    </FooterLinksTitle>
                </FooterLinksTitleWrap>
                <FooterLinks>
                    <CompanyEmail op = {true} href = "#">{link.link1}</CompanyEmail>
                    <CompanyEmail op = {true} href = "#">{link.link2}</CompanyEmail>
                    <CompanyEmail op = {true} href = "#">{link.link3}</CompanyEmail>
                </FooterLinks>
            </FooterLinksWrap>
            ))}
        </FooterLinksContainer>
    </FooterWrap>
  )
}

export default Footer