import styled from "styled-components";

export const NavbarWrap = styled.div`
    width: 100%;
    background-color: #EEF3FF;
    padding: 30px 60px;

    @media (max-width: 768px)
    {
        padding-inline:25px;
    }
`

export const NavBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CompanyNameWrap = styled.div`
    
` 

export const CompanyName = styled.h1`
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 400;
`

export const NavLinksWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 65px;

    @media (max-width: 850px)
    {
        gap: 45px;
    }

    @media (max-width: 768px)
    {
        display: none;
    }
`

export const Navlinks = styled.a`
    text-decoration: none;
    color: black;
`

export const HamWrap = styled.div`
    font-size: 25px;
    cursor: pointer;
    display: none;

    @media (max-width: 768px)
    {
        display: flex;
    }
`

export const HiddenNavLinks = styled.div`
    display: none;

    @media (max-width: 768px) {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        gap: 60px;
        background-color: #EEF3FF;
        position: absolute;
        top: 99px;
        left:0px;
        font-size: 22px;
        padding-top: 40px;
        z-index: 5;
    }
`