import React, { useEffect, useRef } from "react"
import { srConfigIntro } from "../../../config"
import sr from "../../../utils/sr"

import Button from "@material-ui/core/Button"
import {
  IntroWrapper,
  TextContainer,
  Salutation,
  Name,
  Title,
  Description,
  ButtonContainer,
} from "./Intro.styled"

const Intro = () => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfigIntro()), [])

  return (
    <IntroWrapper id="intro" className="load-hidden" ref={revealContainer}>
      <TextContainer>
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
    </IntroWrapper>
  )
}

export default Intro
