import React from "react"
import styled from "styled-components"
import DesktopHeroImage from "../images/DesktopHeroImage"

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`

const IntroHero = () => {
  return (
    <section>
      <DesktopHeroImage />
      <HeroText>
        <h3>Hi I'm Daryll, Full Stack Developer</h3>
      </HeroText>
    </section>
  )
}

export default IntroHero
