import React from 'react'
import { AboutCardInfo, AboutCard1,AboutCard2,AboutCard3,AboutCard4, AboutCardsDesc, AboutCardsTitle, AboutCardsWrap, AboutContainer, AboutDescWrap, AboutTagLineWrap, AboutWrap, IconWrap1, IconWrap2, IconWrap3, IconWrap4, TagLineWrap } from '../../styles/About'
import { HeroDesc, HeroTagLine } from '../../styles/Hero'
import { FaGlasses } from "react-icons/fa";
import { CiTrophy } from "react-icons/ci";
import { PiMaskHappy } from "react-icons/pi";
import { MdOutlineDriveEta } from "react-icons/md";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const About = () => {

    const responsiveOptions = {
        0: {
            items: 1,
            autoWidth: true 
        },
        400: {
            items: 1,
            autoWidth: true  
        },
        768: {
            items: 2,
            autoWidth: true  
        },
        1000: {
            items: 3,
            autoWidth: true   
        },
    };
  return (
    <AboutContainer>
        <AboutWrap>
            <AboutTagLineWrap>
                <TagLineWrap>
                    <HeroTagLine>Personlized eyecare for you</HeroTagLine>
                </TagLineWrap>
                <AboutDescWrap>
                    <HeroDesc>Select one card to find the perfect style or lenses, according to your needs.</HeroDesc>
                </AboutDescWrap>
            </AboutTagLineWrap>
            <AboutCardsWrap>
            <OwlCarousel   
                className="owl-theme"  
                loop  
                margin={20}
                responsive={responsiveOptions} 
                center={true}
            >
                <AboutCard1>
                    <IconWrap1>
                        <FaGlasses />
                    </IconWrap1>
                    <AboutCardInfo>
                        <AboutCardsTitle>Digital Life Style</AboutCardsTitle>
                        <AboutCardsDesc>Enhance your digital lifestyle with precision Eyeglasses for Strain-Free Vision.</AboutCardsDesc>
                    </AboutCardInfo>
                </AboutCard1>
                <AboutCard2>
                    <IconWrap2>
                        <CiTrophy />
                    </IconWrap2>
                    <AboutCardInfo>
                        <AboutCardsTitle>Great Gamer</AboutCardsTitle>
                        <AboutCardsDesc>Level up your gaming experience with glasses designed for the Great Gamer in you</AboutCardsDesc>
                    </AboutCardInfo>
                </AboutCard2>
                <AboutCard3>
                    <IconWrap3>
                        <PiMaskHappy />
                    </IconWrap3>
                    <AboutCardInfo>
                        <AboutCardsTitle>Outdoor Lover</AboutCardsTitle>
                        <AboutCardsDesc>Explore the Great Outdoors with Clarity and Comfort, Eyeware for the Outdoor Enthusiast</AboutCardsDesc>
                    </AboutCardInfo>
                </AboutCard3>
                <AboutCard4>
                    <IconWrap4>
                        <MdOutlineDriveEta />
                    </IconWrap4>
                    <AboutCardInfo>
                        <AboutCardsTitle>Always Driving</AboutCardsTitle>
                        <AboutCardsDesc>Navigate Every Journey: Eyeware Companion for the Always-Driving Enthusiast</AboutCardsDesc>
                    </AboutCardInfo>
                </AboutCard4>
                </OwlCarousel>
            </AboutCardsWrap>
        </AboutWrap>
    </AboutContainer>
  )
}

export default About