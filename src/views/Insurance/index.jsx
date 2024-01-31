import React from 'react'
import { ColorWrap, InsuranceAndShopOnlineWrap, InsuranceContainer, InsuranceGlassWrap, InsuranceImgWrap, InsuranceInfoWrap, InsuranceTagLine, InsuranceTagLineWrap, InsuranceWrapper, LensesDesc, LensesDescHeading, LensesDescWrap, LensesImg,  LensesImgWrap, LensesInfoWrap, LensesWrap, OnlineShopDesc, OnlineShopImgContainer, OnlineShopImgWrap, OnlineShopInfoWrap, OnlineShopWrap, UnrivelledWrap } from '../../styles/Insurance'
import { AboutDescWrap, AboutTagLineWrap, TagLineWrap } from '../../styles/About'
import { ExploreShop, HeroDesc, HeroDescWrap, HeroLinksWrap, HeroTagLine } from '../../styles/Hero'
import LenseImg from '../../assets/glass6.png'

const Insurance = () => {
  return (
    <InsuranceContainer>
        <InsuranceWrapper>
            <AboutTagLineWrap>
                <TagLineWrap>
                    <HeroTagLine>Unrivalled Excellence</HeroTagLine>
                </TagLineWrap>
                <AboutDescWrap>
                    <HeroDesc>Select one card to find the perfect style or lenses, according to your needs.</HeroDesc>
                </AboutDescWrap>
            </AboutTagLineWrap>
            <UnrivelledWrap>
            <InsuranceAndShopOnlineWrap>
                <InsuranceInfoWrap>
                    <InsuranceTagLineWrap>
                        <InsuranceTagLine>
                            Purchasing with insurance, made easy.
                        </InsuranceTagLine>
                    </InsuranceTagLineWrap>
                    <HeroDescWrap>
                        <HeroDesc>
                            This is our promise to you. we accept most vision insurance plans, both in and out-of-network.
                        </HeroDesc>
                    </HeroDescWrap>
                    <HeroLinksWrap>
                        <ExploreShop href = "#" shop>Shop with insurance</ExploreShop>
                    </HeroLinksWrap>
                   <InsuranceGlassWrap>
                        <InsuranceImgWrap>
                        </InsuranceImgWrap>
                   </InsuranceGlassWrap>
                </InsuranceInfoWrap>
                <OnlineShopWrap>
                <OnlineShopInfoWrap>
                    <InsuranceTagLineWrap>
                        <InsuranceTagLine>
                            Shop Online, Thrive In-Store.
                        </InsuranceTagLine>
                    </InsuranceTagLineWrap>
                    <HeroDescWrap>
                        <OnlineShopDesc>
                            Online convenience meets in-store expertise for your ultimate eyeware experience!
                        </OnlineShopDesc>
                    </HeroDescWrap>             
                    </OnlineShopInfoWrap>
                    <OnlineShopImgContainer>
                        <OnlineShopImgWrap>
                           
                        </OnlineShopImgWrap>
                    </OnlineShopImgContainer>
                </OnlineShopWrap>
            </InsuranceAndShopOnlineWrap>
            <LensesWrap>
                <LensesInfoWrap>
                    <InsuranceTagLineWrap>
                        <InsuranceTagLine>
                            Our lenses
                        </InsuranceTagLine>
                    </InsuranceTagLineWrap>
                    <LensesDescWrap>
                        <LensesDescHeading>Transitions®</LensesDescHeading>
                        <LensesDesc>
                            They quickly darken in sunlight and fade back to clear indoors: eyeglasses and sunglasses in one. Available in prescription and non-prescription glasses.
                        </LensesDesc>
                    </LensesDescWrap>
                    <ColorWrap>
                        <LensesDescHeading>Blue-violet light</LensesDescHeading>
                    </ColorWrap>
                    <ColorWrap>
                        <LensesDescHeading>Prescription sun</LensesDescHeading>
                    </ColorWrap>
                </LensesInfoWrap>
                    <LensesImgWrap>
                        <LensesImg src = {LenseImg} />
                    </LensesImgWrap>
            </LensesWrap>
            </UnrivelledWrap>
        </InsuranceWrapper>
    </InsuranceContainer>
  )
}

export default Insurance