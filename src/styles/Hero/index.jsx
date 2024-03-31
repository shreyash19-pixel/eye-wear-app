import styled from "styled-components";


export const HeroContainer = styled.div`
    width: 100%;
    background-color: #EEF3FF;
    padding-block: 30px;
`

export const HeroWrap = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    

    @media (max-width: 768px)
    {
        flex-direction: column;
        text-align: center;
        justify-content: center;
        gap: 70px;
    }
`

export const HeroInfoWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    padding-inline: 60px;
    

    @media (max-width: 768px)
    {
       padding-right: 60px;
       padding-top: 30px;
    }

    @media (max-width: 480px)
    {
       padding-inline: 20px;
       padding-top: 20px;
    }
`

export const HeroTagLineWrap = styled.div`
    width: 100%;
    max-width: 540px;

    @media (max-width: 768px)
    {
       max-width: 768px;
    }

    @media (max-width: 500px)
    {
        text-align: center;
    }
`

export const HeroTagLine = styled.h1` 
   font-family: 'Merriweather', serif;
   font-size: 45px;

    @media (max-width: 1130px)
    {
        font-size: 35px;
    }

    
    @media (max-width: 385px)
    {
       font-size: 27px;
    }

   
`

export const HeroDescWrap = styled.div`
    width: 100%;
    max-width: 450px;

    @media (max-width: 768px)
    {
       max-width: 768px;
    }

    
`

export const HeroDesc = styled.p`
    @media (max-width: 1130px)
    {
        font-size: 13px;
    }

    @media (max-width: 385px)
    {
       font-size: 11px;
    }
`

export const HeroLinksWrap = styled.div`
    width: 100%;
    display: flex;
    gap: 15px;

     @media (max-width: 768px)
    {
       justify-content: center;
    }
`

export const ExploreShop = styled.a`
    background-color: ${(props) => (props.shop ? "black": "transparent")};
    color: ${(props) => (props.shop ? "white": "black")};
    padding: 10px 15px;
    border-radius: 30px;
    border: 1px solid black;
    text-decoration: none;
    font-size: 14px;

    @media (max-width: 1130px)
    {
        padding: 8px 12px;
        font-size: 12px;
    }

     @media (max-width: 768px)
    {
       padding: 10px 15px;
    }


`

export const CutomerRateWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px)
    {
       align-items: center;
       gap: 5px;
    }

`

export const CutomerImgRatingsWrap = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

export const CustomerImgSec = styled.div`
    display: flex;
`

export const CustomerImg1Wrap = styled.div`

`

export const CustomerImg2Wrap = styled.div`
    position: relative;
    left: -6px;
    z-index: 3;
`

export const CustomerImg3Wrap = styled.div`
     position: relative;
    left: -12px;
    z-index: 4;
`

export const CutomerImg = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 100%;
    border: 2px solid white;
`
export const RatingsWrap = styled.div`
    display: flex;
    flex-direction: column;
`
export const Ratings = styled.h5`

`

export const SatisfiedCustomer = styled.p`
    font-size: 12px;
    font-weight: ${(props) => (props.excellent ? "600" : "400")};
`

export const StarsSec = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 380px)
    {
        gap: 7px;
    }
`
export const StarsCont = styled.div`
    display: flex;
    gap: 1px;
    align-items: center;
    justify-content: center;
`

export const TrustPilotWrap = styled.div`
    display: flex;
    align-items: center;
`

export const TrustPilot = styled.h6`
    
`

export const StarsWrap = styled.div`
    color: ${(props) => (props.stars ? "#01B46B" : "white")};
    background-color: ${(props) => (props.stars ? "transparent" : "#01B46B")};
    border-radius: 3px;
    padding-inline: 2px;
    font-size: 12px;
`
export const CustomersTryOutWrap = styled.div`
    width: 100%;
    max-width: 730px;
    display: flex;
    gap: 15px;
    cursor: pointer;

    @media (max-width: 768px)
    {
        max-width: 900px;
    }
`

export const CustomerTryOutImgWrap1 = styled.div`
    position: relative;

    &::after{
    content: '';
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 100px; 
      background: linear-gradient(to bottom, transparent, rgba(252, 0, 0, 0.5));
      pointer-events: none;
      z-index: 0;
      border-radius: 20px;
    }
`

export const CustomerTryOutImgWrap2 = styled(CustomerTryOutImgWrap1)`

    &::after{
      background: linear-gradient(to bottom, transparent, rgba(241, 255, 38, 0.5));
    }
`

export const CustomerTryOutImgWrap3 = styled(CustomerTryOutImgWrap1)`
    
    &::after{
        background: linear-gradient(to bottom, transparent, rgba(66, 142, 255, 0.5));
    }
`

export const CustomerTryOutImgs = styled.img`
    width: 100%;
    max-width: 250px;
    border-radius: 20px;
    aspect-ratio: 3/4;
    
 
`

export const NameWrap = styled.div`
    position: absolute;
    left: 20px;
    bottom: 20px;
    width: 100%;
    max-width: 50px;

    @media (max-width: 1130px)
    {
        left: 10px;
        bottom: 10px;
    }

    @media (max-width: 380px)
    {
        left: 10px;
        bottom: 10px;
    }

`

export const Name = styled.h2`
    color: white;
    z-index: 3;

    @media (max-width: 1130px)
    {
        font-size: 18px;
    }

    @media (max-width: 768px)
    {
        font-size: 18px;
    }
`