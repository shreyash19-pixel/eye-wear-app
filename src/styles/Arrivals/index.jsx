import styled from "styled-components";

export const ArrivalsContainer = styled.div`
    width: 100%;
    padding-block: 40px;

    @media (max-width: 400px) {
        padding-inline: 15px;
        padding-block: 20px;
    }
`

export const ArrivalsWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 400px) {
        gap: 15px;
    }
`

export const GlassesWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    
`

export const GlassesCard = styled.div`
    width: 100%;
    max-width: 350px;
    min-height: 300px;
    background-color: #f7f7f9;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    cursor: pointer;
`

export const AboutWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const BestSellerWrap = styled.div`
    background-color: white;
    padding: 5px;
`

export const BestSeller = styled.h5`
    font-weight: 500;
`

export const AvailableColorWrap = styled.div`

`

export const GlassImgWrap = styled.div`
    
`

export const GlassImg = styled.img`
    width: 100%;
`

export const GlassInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const GlassInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
`

export const GlassName = styled.h5`
    font-weight: 500;
`

export const GlassPrice = styled.h4`
    font-weight: 700;
`

export const UserIcon = styled.div`
    font-size: 20px;
    background-color: white;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

