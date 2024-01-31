import React from 'react'
import { AboutWrapper, ArrivalsContainer, ArrivalsWrap, AvailableColorWrap, BestSeller, BestSellerWrap, GlassImg, GlassImgWrap, GlassInfoContainer, GlassInfoWrap, GlassName, GlassPrice, GlassesCard, GlassesWrapper, UserIcon } from '../../styles/Arrivals'
import { HeroTagLine} from '../../styles/Hero'
import Glass1 from '../../assets/glass1.png'
import Glass2 from '../../assets/glass2.png'
import Glass3 from '../../assets/glass3.png'
import { CiUser } from "react-icons/ci";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { AboutTagLineWrap, TagLineWrap } from '../../styles/About'

const Arrivals = () => {

    const glass = [
        {title : "Best Seller", color : "3 colors", img : Glass1, version : "AP2548 Optics", name : "Alex Perry", price : "$187.99"},
        {title : "Top Pick", color : "2 colors", img : Glass2, version : "AP2549 Optics", name : "Persol", price : "$214.99"},
        {title : "Flash Sale", color : "4 colors", img : Glass3, version : "AP2549 Optics", name : "Arnette", price : "$199.99"},
    ]

    const responsiveOptions = {
        0: {
            items: 1,
            autoWidth: false  
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
    <ArrivalsContainer>
        <ArrivalsWrap>
         <AboutTagLineWrap> 
                <HeroTagLine>
                    New Arrivals
                </HeroTagLine>
            </AboutTagLineWrap>
            <GlassesWrapper>
            <OwlCarousel   
                className="owl-theme"  
                loop  
                margin={20}
                responsive={responsiveOptions} 
                center={true}
            >
                {glass.map((glasses) => (
                <GlassesCard>
                    <AboutWrapper>
                        <BestSellerWrap>
                            <BestSeller>{glasses.title}</BestSeller>
                        </BestSellerWrap>
                        <AvailableColorWrap>
                            <BestSeller>{glasses.color}</BestSeller>
                        </AvailableColorWrap>
                    </AboutWrapper>
                    <GlassImgWrap>
                        <GlassImg src = {glasses.img} />
                    </GlassImgWrap>
                    <GlassInfoContainer>
                        <GlassInfoWrap>
                            <GlassName>{glasses.version}</GlassName>
                            <GlassName>{glasses.name}</GlassName>
                            <GlassPrice>{glasses.price}</GlassPrice>
                        </GlassInfoWrap>
                        <UserIcon>
                            <CiUser />
                        </UserIcon>
                    </GlassInfoContainer>
                </GlassesCard>
                ))}
                </OwlCarousel>
            </GlassesWrapper>
        </ArrivalsWrap>
    </ArrivalsContainer>
  )
}

export default Arrivals