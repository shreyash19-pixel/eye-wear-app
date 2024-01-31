import React from 'react'
import {Name, CustomerTryOutImgs,CustomerImg1Wrap, CustomerTryOutImgWrap2,CustomerImg2Wrap, CustomerImgSec, CustomersTryOutWrap, CutomerImg, CutomerImgRatingsWrap, CutomerRateWrap, ExploreShop, HeroContainer, HeroDesc, HeroDescWrap, HeroInfoWrap, HeroLinksWrap, HeroTagLine, HeroTagLineWrap, HeroWrap, Ratings, RatingsWrap, SatisfiedCustomer, StarsCont, StarsSec, StarsWrap, TrustPilot, TrustPilotWrap, NameWrap, CustomerTryOutImgWrap1, CustomerTryOutImgWrap3 } from '../../styles/Hero'
import CustomerRate1 from '../../assets/customer-rate1.jpg'
import CustomerRate2 from '../../assets/customer-rate2.jpg'
import { IoStarSharp } from "react-icons/io5";
import TryOut1 from '../../assets/tryout1.jpg'
import TryOut2 from '../../assets/tryout2.jpg'
import TryOut3 from '../../assets/tryout3.jpg'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  


const Hero = () => {

    const responsiveOptions = {
        0: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1000: {
            items: 3,
        },
    };

  return (
    <HeroContainer>
        <HeroWrap>
            <HeroInfoWrap>
                <HeroTagLineWrap>
                    <HeroTagLine>
                        Find your perfect eyewear look
                    </HeroTagLine>
                </HeroTagLineWrap>
                <HeroDescWrap>
                    <HeroDesc>We're all about finding you that perfect pair, Experience the difference a perfect pair makes. Let's find yours together.</HeroDesc>
                </HeroDescWrap>
                <HeroLinksWrap>
                    <ExploreShop  href = "#" shop = "true">
                        Explore shop
                    </ExploreShop>
                    <ExploreShop href = "#">
                        Use Your Benefits
                    </ExploreShop>
                </HeroLinksWrap>
                <CutomerRateWrap>
                    <CutomerImgRatingsWrap>
                    <CustomerImgSec>
                        <CustomerImg1Wrap>
                            <CutomerImg src = {CustomerRate1}/>
                        </CustomerImg1Wrap>
                        <CustomerImg2Wrap>
                            <CutomerImg src = {CustomerRate2}/>
                        </CustomerImg2Wrap>
                    </CustomerImgSec>
                    <RatingsWrap>
                        <Ratings>50k+</Ratings>
                        <SatisfiedCustomer>Satisfied Customer</SatisfiedCustomer>
                    </RatingsWrap>
                    </CutomerImgRatingsWrap>
                    <StarsSec>
                        <TrustPilotWrap>
                            <StarsWrap stars = "true">
                                <IoStarSharp />
                            </StarsWrap>
                            <TrustPilot>Trustpilot</TrustPilot>
                        </TrustPilotWrap>
                        <TrustPilotWrap>
                          <TrustPilot>&#x2022;</TrustPilot>
                        </TrustPilotWrap>
                        <StarsCont>
                            <StarsWrap>
                                <IoStarSharp />
                            </StarsWrap>
                                <StarsWrap>
                            <IoStarSharp />
                            </StarsWrap>
                                <StarsWrap>
                            <IoStarSharp />
                                </StarsWrap>
                            <StarsWrap>
                            <IoStarSharp />
                                </StarsWrap>
                            <StarsWrap>
                                <IoStarSharp />
                            </StarsWrap>
                        </StarsCont>
                        <SatisfiedCustomer>15,008</SatisfiedCustomer>
                        <TrustPilotWrap>
                          <TrustPilot>&#x2022;</TrustPilot>
                        </TrustPilotWrap>
                        <SatisfiedCustomer excellent = "true">Excellent</SatisfiedCustomer>
                    </StarsSec>
                </CutomerRateWrap>
            </HeroInfoWrap>
            <CustomersTryOutWrap> 
            <OwlCarousel   
                className="owl-theme"  
                loop  
                margin={20}
                responsive={responsiveOptions} 
                center={true}
            >
                <CustomerTryOutImgWrap1>
                    <CustomerTryOutImgs src = {TryOut1} />
                    <NameWrap>
                        <Name>Hugo Boss</Name>
                    </NameWrap>
                </CustomerTryOutImgWrap1>
                <CustomerTryOutImgWrap2>
                    <CustomerTryOutImgs src = {TryOut2} />
                    <NameWrap>
                        <Name>Alex Perry</Name>
                    </NameWrap>
                </CustomerTryOutImgWrap2>
                <CustomerTryOutImgWrap3>
                    <CustomerTryOutImgs src = {TryOut3} />
                    <NameWrap>
                        <Name>Michael Kors</Name>
                    </NameWrap>
                </CustomerTryOutImgWrap3>
                </OwlCarousel>
            </CustomersTryOutWrap>
        </HeroWrap>
    </HeroContainer>
  )
}

export default Hero