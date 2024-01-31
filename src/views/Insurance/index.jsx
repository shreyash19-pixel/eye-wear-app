import React from 'react'
import { InsuranceAndShopOnlineWrap, InsuranceContainer, InsuranceGlassWrap, InsuranceImgWrap, InsuranceInfoWrap, InsuranceTagLine, InsuranceTagLineWrap, InsuranceWrapper, OnlineShopDesc, OnlineShopImgContainer, OnlineShopImgWrap, OnlineShopInfoWrap, OnlineShopWrap } from '../../styles/Insurance'
import { AboutDescWrap, AboutTagLineWrap, TagLineWrap } from '../../styles/About'
import { ExploreShop, HeroDesc, HeroDescWrap, HeroLinksWrap, HeroTagLine } from '../../styles/Hero'


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
        </InsuranceWrapper>
    </InsuranceContainer>
  )
}

export default Insurance