import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { IconContext } from "react-icons"
import { FaAngleDoubleDown } from "react-icons/fa"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import IconButton from "@material-ui/core/IconButton"
import { srConfigIntro } from "../../../utils/config"
import sr from "../../../utils/sr"
import "animate.css"
import Avatar from "../../../assets/svg/avataaars-me.svg"
import {
  Wrapper,
  TextContainer,
  Name,
  Title,
  Description,
  DownChevron,
  ImageWrapper,
} from "./Intro.styled"

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} in={!trigger} timeout={200}>
      {children}
    </Slide>
  )
}

export default function Intro(props) {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfigIntro()), [])

  return (
    <Wrapper id="intro">
      <TextContainer className="load-hidden" ref={revealContainer}>
        <ImageWrapper>
          <Avatar />
        </ImageWrapper>
        <Name> Daryll &nbsp;&nbsp;Capistrano</Name>
        <Title>Web Developer</Title>
        <Description>Based in Las Vegas</Description>
      </TextContainer>
      <HideOnScroll {...props}>
        <DownChevron className="animate__animated animate__fadeInDown animate__delay-2s animate__repeat-2">
          <Link to="#about">
            <IconButton aria-label="scroll to introduction">
              <IconContext.Provider
                value={{ color: "black", title: "next section" }}
              >
                <FaAngleDoubleDown />
              </IconContext.Provider>
            </IconButton>
          </Link>
        </DownChevron>
      </HideOnScroll>
    </Wrapper>
  )
}
