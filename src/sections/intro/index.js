import React from "react"
import Action from "../../components/actions"
import Avatar from "../../assets/svg/avataaars.svg"
import {
  Wrapper,
  TextContainer,
  Name,
  Title,
  // Description,
  ImageWrapper,
} from "./style"

const Intro = () => {
  return (
    <Wrapper id="intro">
      <TextContainer>
        <Name> Daryll &nbsp;&nbsp;Capistrano</Name>
        <Title>Web Developer</Title>
        {/* <Description>in Las Vegas</Description> */}
      </TextContainer>
      <Action />
      <ImageWrapper>
        <Avatar />
      </ImageWrapper>
    </Wrapper>
  )
}

export default Intro
