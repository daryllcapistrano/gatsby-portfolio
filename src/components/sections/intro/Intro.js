import React, { useEffect, useRef } from "react"
import { srConfigIntro } from "../../../config"
import sr from "../../../utils/sr"
import { Container, Button } from "@material-ui/core"
import {
  IntroWrapper,
  TextContainer,
  Salutation,
  Name,
  Title,
  Description,
  ButtonContainer,
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
        <Name> Daryll Capistrano.</Name>
        <Title>I'm a full stack developer</Title>
        <Description></Description>
        <ButtonContainer>
          <Button
            variant="outlined"
            color="primary"
            disableElevation={true}
            href="#contact"
          >
            hire me !
          </Button>
        </ButtonContainer>
      </TextContainer>
      <Container
        style={{
          top: `90vh`,
          position: `relative`,
          width: `100%`,
          textAlign: `center`,
          fontSize: `1.25em`,
        }}
        className="animate__animated animate__fadeInDown animate__delay-2s animate__repeat-2"
      >
        {/* <div>learn more about me</div> */}
        <FaAngleDoubleDown />
      </Container>
    </IntroWrapper>
  )
}

export default Intro
