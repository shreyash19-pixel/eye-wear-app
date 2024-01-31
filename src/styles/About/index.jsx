import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
`

export const AboutWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;

     @media (max-width: 400px) {
        gap: 15px;
    }
`

export const AboutTagLineWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 60px;

    @media (max-width: 1130px) {
        padding-inline: 18px;
    }

    @media (max-width: 500px) {
        padding-inline: 15px;
    }
`

export const TagLineWrap = styled.div`
    width: 100%;
    max-width: 400px;
    text-align: center;
`
export const AboutDescWrap = styled.div`
    @media (max-width: 768px)
    {
        text-align: center;
    }
`

export const AboutCardsWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 15px;
`
export const AboutCard1 = styled.div`
    width: 100%;
    max-width: 280px;
    min-height: 280px;
    border: 1px solid #d3cccc;
    border-radius: 30px;
    padding: 15px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    background: linear-gradient(to bottom, transparent, rgb(92,205,176));

    @media (max-width: 480px)
    {
        max-width: 240px;
        min-height: 240px;
    }

    @media (max-width: 375px)
    {
        max-width: 210px;
        min-height: 210px;
    }
`

export const AboutCard2 = styled(AboutCard1)`
    background: linear-gradient(to bottom, transparent, rgb(19,128,220));
`

export const AboutCard3 = styled(AboutCard1)`
    background: linear-gradient(to bottom, transparent, rgb(237,187,27));
`

export const AboutCard4 = styled(AboutCard1)`
    background: linear-gradient(to bottom, transparent, rgb(220,59,148));
`



export const IconWrap1 = styled.div`
    font-size: 40px;
    color: #5CCDB0;
`

export const IconWrap2 = styled(IconWrap1)`
    color: #1380DC;
`

export const IconWrap3 = styled(IconWrap1)`
    color: #EDBB1B;
`

export const IconWrap4 = styled(IconWrap1)`
    color: #DC3B94;
`
export const AboutCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const AboutCardsTitle = styled.h2`
    font-family: 'Merriweather', serif;
    font-weight: 800;

    @media (max-width: 480px)
    {
        font-size: 20px;
    }

    @media (max-width: 375px)
    {
        font-size: 16px;
    }
`

export const AboutCardsDesc = styled.p`
        font-weight: 400;
        font-size: 16px;

        @media (max-width: 480px)
    {
        font-size: 14px;
    }

    @media (max-width: 375px)
    {
        font-size: 12px;
    }
`

