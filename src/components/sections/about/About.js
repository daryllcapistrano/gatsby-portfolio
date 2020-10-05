import React, { useEffect, useRef } from "react"
import { srConfig } from "../../../config"
import sr from "../../../utils/sr"
import HeadShotImage from "../../images/HeadShotImage"
import { Container, Grid } from "@material-ui/core/"
import { ImageWrapper, TextWrapper } from "./About.styled"
import {
  SectionWrapper,
  SectionHeader,
  SectionNumber,
  SectionTitle,
} from "../Section.styled"

const AboutMe = () => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <SectionWrapper id="about">
      <Container className="load-hidden" ref={revealContainer}>
        <SectionHeader>
          <SectionNumber>02.</SectionNumber>
          <SectionTitle>Some Background</SectionTitle>
        </SectionHeader>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <ImageWrapper>
              <HeadShotImage />
            </ImageWrapper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextWrapper>
              <p>
                I'm a <strong>self-taught full stack</strong> developer with{" "}
                <strong>4 years</strong> of experience. Currently living in{" "}
                <strong> Portland, Oregon</strong>. I create websites and apps
                that are thoughtfully designed and built with performance and
                best practices in mind.
              </p>
            </TextWrapper>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  )
}

export default AboutMe
