import React from "react"
// import { motion } from "framer-motion"
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
  return (
    <IntroWrapper id="intro">
      <TextContainer>
        <Salutation>Hi, my name is</Salutation>
        <Name> Daryll Capistrano.</Name>
        {/* <motion.div
          animate={{ scale: 1.1 }}
          transition={{ scale: "spring", damping: 3 }}
        > */}
        <Title>I'm a full stack developer</Title>
        {/* </motion.div> */}
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
