import styled from "styled-components";
import GlassImage1 from '../../assets/glass2.png' 
import GlassImg2 from '../../assets/glass5.png'
import CheckMachine from '../../assets/checkup-machine.png'

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

export const UnrivelledWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
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
    justify-content: space-between;
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
     min-height: 205px;
     background-size: 500px 500px;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 1082px)
    {
        background-size: cover;
    }

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
export const LensesWrap = styled.div`
    background-color: #EAD3C5;
    width: 100%;
    min-height: 350px;
    border-radius : 30px;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    padding: 30px;

    @media (max-width: 768px)
    {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }

    @media (max-width: 522px)
    {
        padding: 20px;
    }
`

export const LensesInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const LensesDescWrap = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: white;
    border-radius: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const LensesDescHeading = styled.h3`
    font-weight: 600;

    @media (max-width: 522px)
    {
        font-size: 15px;
    }
`

export const LensesDesc = styled.p`
    font-size: 12px;

    @media (max-width: 522px)
    {
        font-size: 10px;
    }
`

export const ColorWrap = styled.div`
    border : 1px solid #b9b7b7;
    padding: 15px;
    border-radius: 20px;
`

export const LensesImgWrap = styled.div`
    display: flex;
    align-items: center;
`

export const LensesImg = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: center;
`



export const VirtualWrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eaeed6;
    border-radius: 30px;

    @media (max-width: 768px)
    {
        max-width: 768px;
    }
    
`
export const VirtualImgWrap = styled.div`
    display: flex;
    align-items: flex-end;
    position: relative;
    bottom: -29px;
`

export const VirtualImg = styled.img`
    width: 100%;
`
export const SpecialistsDoctorAndMachineWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 10px;

    @media (max-width: 1010px)
    {
        flex-direction: column-reverse;
        align-items: center;
        gap: 20px;
    }
`

export const SpecialistsDoctorWrap = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    min-height: 200px;
    width: 100%;
    max-width: 200px;

    @media (max-width: 1010px)
    {
        min-height: 10px;
    }
   
`

export const DoctorsContainer = styled.div`
    display: flex;

    @media (max-width: 1010px)
    {
        flex-direction: column;
        text-align: center;
    }
`

export const MachineImgWrap = styled.div`
    background-image: url(${CheckMachine});
    width: 100%;
    height: 100%;
    background-size: 290px 290px;
    background-position: center;
    background-repeat: no-repeat;
    


    @media (max-width: 768px)
    {
        height: 220px;
        background-size: 220px 190px;
    }

`

