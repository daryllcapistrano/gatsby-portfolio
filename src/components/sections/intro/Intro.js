import React, { useEffect, useRef } from "react"
import { FaAngleDoubleDown } from "react-icons/fa"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
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
import "animate.css"

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 75 })

  return (
    <Slide appear={false} in={!trigger} timeout={450}>
      {children}
    </Slide>
  )
}

export default function Intro(props) {
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
          <StyledButton href="#contact">
            hire me
            <span
              role="img"
              aria-label="fingers crossed emoji"
              style={{ margin: `0 0 0 8px` }}
            >
              🤞
            </span>
          </StyledButton>
        </ButtonContainer>
        <HideOnScroll {...props}>
          <CallToAction className="animate__animated animate__fadeInDown animate__delay-2s animate__repeat-3">
            <a href="#about">
              <FaAngleDoubleDown />
            </a>
          </CallToAction>
        </HideOnScroll>
      </TextContainer>
      {/* <HideOnScroll {...props}>
        <CallToAction className="animate__animated animate__fadeInDown animate__delay-2s animate__repeat-3">
          <a href="#about">
            <FaAngleDoubleDown />
          </a>
        </CallToAction>
      </HideOnScroll> */}
    </IntroWrapper>
  )
}
