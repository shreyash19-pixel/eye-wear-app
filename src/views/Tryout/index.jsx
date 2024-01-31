import React, { useState } from 'react'
import { TryoutContainer, TryoutGlassImg, TryoutGlassWrap, TryoutImg, TryoutImgWrap, TryoutOptionImg, TryoutOptionImgWrap, TryoutOptionWrap, TryoutSection, TryoutWrap } from '../../styles/Tryout'
import { AboutDescWrap, AboutTagLineWrap, TagLineWrap } from '../../styles/About'
import { HeroDesc, HeroTagLine } from '../../styles/Hero'
import TryOutImg from '../../assets/tryout5.png'
import Glasses1 from '../../assets/glass7.png'
import Glasses2 from '../../assets/glass8.png'
import Glasses3 from '../../assets/glass9.png'

const Tryout = () => {


    const [glass, setGlass] = useState(Glasses1)

  return (
    <TryoutContainer>
        <TryoutWrap>
            <AboutTagLineWrap>
                <TagLineWrap>
                    <HeroTagLine>Try Out</HeroTagLine>
                </TagLineWrap>
                <AboutDescWrap>
                    <HeroDesc>Try out our new collection of glasses!!!</HeroDesc>
                </AboutDescWrap>
            </AboutTagLineWrap>
            <TryoutSection>
                <TryoutImgWrap>
                    <TryoutImg src = {TryOutImg} />
                    <TryoutGlassWrap>
                        <TryoutGlassImg src = {glass} />
                    </TryoutGlassWrap>
                </TryoutImgWrap>
                <TryoutOptionWrap>
                    <TryoutOptionImgWrap isThis = {glass === Glasses1} onClick={() => setGlass(Glasses1)}>
                        <TryoutOptionImg src = {Glasses1} />
                    </TryoutOptionImgWrap>
                    <TryoutOptionImgWrap isThis = {glass === Glasses2} onClick={() => setGlass(Glasses2)}>
                        <TryoutOptionImg src = {Glasses2} />
                    </TryoutOptionImgWrap>
                    <TryoutOptionImgWrap isThis = {glass === Glasses3} onClick={() => setGlass(Glasses3)}>
                        <TryoutOptionImg src = {Glasses3} />
                    </TryoutOptionImgWrap>
                </TryoutOptionWrap>
            </TryoutSection>
        </TryoutWrap>
    </TryoutContainer>
  )
}

export default Tryout