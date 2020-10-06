import React, { useEffect, useRef } from "react"
import { srConfigIntro } from "../../../config"
import sr from "../../../utils/sr"
import {
  IntroWrapper,
  TextContainer,
  Salutation,
  Name,
  Title,
  Description,
  ButtonContainer,
  StyledButton,
  CallToAction,
} from "./Intro.styled"
import { FaAngleDoubleDown } from "react-icons/fa"
import "animate.css"

const Intro = () => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfigIntro()), [])

  return (
    <IntroWrapper id="intro">
      <TextContainer className="load-hidden" ref={revealContainer}>
        <Salutation>Hi, my name is</Salutation>
        <Name> Daryll Capistrano</Name>
        <Title>I build things for the internet</Title>
        <Description></Description>
        <ButtonContainer>
          <StyledButton href="#contact">hire me !</StyledButton>
        </ButtonContainer>
      </TextContainer>
      <CallToAction className="animate__animated animate__fadeInDown animate__delay-2s animate__repeat-3">
        {/* <div>learn more about me</div> */}
        <FaAngleDoubleDown />
      </CallToAction>
    </IntroWrapper>
  )
}

export default Intro
