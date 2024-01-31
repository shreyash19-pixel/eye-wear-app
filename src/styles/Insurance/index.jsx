import styled from "styled-components";
import GlassImage1 from '../../assets/glass2.png' 
import GlassImg2 from '../../assets/glass5.png'

export const InsuranceContainer = styled.div`
    width: 100%;
    padding: 40px 120px;

    @media (max-width: 1130px)
    {
        padding-inline: 60px;
    }

    @media (max-width: 600px)
    {
        padding-inline: 40px;
    }

    @media (max-width: 450px)
    {
        padding-inline: 25px;
        padding-block: 20px;
    }
`

export const InsuranceWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

   
`

export const InsuranceAndShopOnlineWrap = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;

    @media (max-width: 768px)
    {
        flex-direction: column;
        text-align: center;
    }
`

export const InsuranceInfoWrap = styled.div`
    width: 100%;
    min-height: 400px;
    background-color: #e9effc;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 30px;
    padding: 30px;
`

export const InsuranceTagLineWrap = styled.div`
    width: 100%;
    max-width: 400px;

    @media (max-width: 768px)
    {
        max-width: 768px;
    }
`

export const InsuranceTagLine = styled.h2`
    font-family: 'Merriweather', serif;
    font-size: 36px;

    @media (max-width: 1024px)
    {
        font-size: 28px;
    }

    @media (max-width: 870px)
    {
        font-size: 20px;
    }

    
  
`   


export const InsuranceGlassWrap = styled.div`
    width: 100%;
    height: 100%;
`

export const InsuranceImgWrap = styled.div`
     background-image: url(${GlassImage1});
     width: 100%;
     height: 205px;
     background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`   



export const OnlineShopWrap = styled.div`
    width: 100%;
    max-width: 400px;
    min-height: 400px;
    background-color: #ffe474;
    border-radius: 30px;

    @media (max-width: 768px)
    {
        max-width: 768px;
    }
  
`
export const OnlineShopInfoWrap = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const OnlineShopDesc = styled.p`
    font-size: 16px;

    @media (max-width: 1024px)
    {
        font-size: 14px;
    }

    @media (max-width: 870px)
    {
        font-size: 12px;
    }
`

export const OnlineShopImgContainer = styled.div`
    width: 100%;
`
export const OnlineShopImgWrap = styled.div`
     background-image: url(${GlassImg2});
     width: 100%;
     height: 205px;
     background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 768px)
    {
        background-size: 400px 300px;
        background-position: left;
        height: 250px
    }

    @media (max-width: 600px)
    {
       background-size: contain;
    }
`
