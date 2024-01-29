import React, { useState } from 'react'
import { CompanyName, CompanyNameWrap, HamWrap, HiddenNavLinks, NavBar, NavLinksWrap, NavbarWrap, Navlinks } from '../../styles/Nav'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Nav = () => {
    
    const [nav, setNav] = useState(true)
    !nav?document.body.style.overflow="hidden":document.body.style.overflow="auto";
  
    const handleNav = () => {
        setNav(!nav)
    }

    const handleOverFlow = () => {
        setNav(true)
    }

    return (

    <NavbarWrap>
        <NavBar>
            <CompanyNameWrap>
                <CompanyName>Focal</CompanyName>
            </CompanyNameWrap>
            <NavLinksWrap>
                <Navlinks href = "#">Eyeglasses</Navlinks>
                <Navlinks href = "#">Sunglasses</Navlinks>
                <Navlinks href = "#">Brands</Navlinks>
                <Navlinks href = "#">About</Navlinks>
            </NavLinksWrap>
            <HamWrap onClick = {handleNav}>
                {nav ? <GiHamburgerMenu /> : <RxCross1 />}
            </HamWrap>
            {!nav && (<HiddenNavLinks>
            <Navlinks href = "#" onClick={handleOverFlow}>Eyeglasses</Navlinks>
                <Navlinks href = "#" onClick={handleOverFlow}>Sunglasses</Navlinks>
                <Navlinks href = "#" onClick={handleOverFlow}>Brands</Navlinks>
                <Navlinks href = "#" onClick={handleOverFlow}>About</Navlinks>
            </HiddenNavLinks>)}
        </NavBar>
    </NavbarWrap>
  )
}

export default Nav