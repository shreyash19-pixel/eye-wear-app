import styled from "styled-components";

export const TryoutContainer = styled.div`
    width: 100%;
    padding: 20px 80px;

    @media (max-width: 680px)
    {
        padding-inline: 40px;
    }

    @media (max-width: 550px)
    {
        padding-inline: 20px;
    }

    @media (max-width: 420px)
    {
        padding-inline: 10px;
    }
`

export const TryoutWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const TryoutSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`

export const TryoutImgWrap = styled.div`
    border: 1px solid grey;
    border-radius: 20px;
    position: relative;
    background-color: #E9EFFC;
    width: 100%;
    max-width: 500px;
`

export const TryoutImg = styled.img`
    width: 100%;
    position: relative;
    bottom: -7px;
`

export const TryoutGlassWrap = styled.div`
    position: absolute;
    top: 27%;
    left: 39%;
`

export const TryoutGlassImg = styled.img`
    width: 100%;
    max-width: 135px;
    min-height: 135px;

    @media (max-width:580px)
    {
        max-width: 125px;
        min-height: 125px;
    }

    @media (max-width:500px)
    {
        max-width: 115px;
        min-height: 115px;
    }

    @media (max-width:480px)
    {
        max-width: 110px;
        min-height: 110px;
    }

    @media (max-width:440px)
    {
        max-width: 100px;
        min-height: 100px;
    }

    @media (max-width:380px)
    {
        max-width: 90px;
        min-height: 90px;
    }

    @media (max-width:340px)
    {
        max-width: 80px;
        min-height: 80px;
    }

    
    @media (max-width:320px)
    {
        max-width: 75px;
        min-height: 75px;
    }
`

export const TryoutOptionWrap = styled.div`
    width: 100%;
    max-width: 580px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`

export const TryoutOptionImgWrap = styled.div`
    border: ${(props) => (props.isThis ? "3px solid grey" : "1px solid grey")}; 
    padding: 5px 25px; 
    border-radius: 30px;
    cursor: pointer;

    @media (max-width: 480px)
    {
        padding-inline: 15px;
    }

    
    @media (max-width: 350px)
    {
        padding-inline: 5px;
        padding-block: 2px;
    }
`
export const TryoutOptionImg = styled.img`
    width: 100%;
    max-width: 110px;
    min-height: 110px;

    @media (max-width: 580px)
    {
        max-width: 80px;
        min-height: 80px;
    }
`