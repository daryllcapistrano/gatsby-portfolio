import React from "react"
import styled from "styled-components"
import DesktopHeroImage from "../images/DesktopHeroImage"

const HeroText = styled.h3`
  position: absolute;
  z-index: 100;
  top: 15%;
  left: 15%;
`

const IntroHero = () => {
  return (
    <section>
      <DesktopHeroImage />
      <HeroText>Hi, my name is Daryll</HeroText>
    </section>
  )
}

export default IntroHero
