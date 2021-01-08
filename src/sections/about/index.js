import React from "react"
import HeadShotImage from "../../components/images/HeadShotImage"
import {
  ImageWrapper,
  TextWrapper,
  SectionWrapper,
  SectionHeader,
} from "./style"

const AboutMe = () => {
  return (
    <section id="about">
      <SectionWrapper>
        <SectionHeader>
          <h3>About Me</h3>
        </SectionHeader>
        <TextWrapper>
          <p>
            I'm a <strong>self-taught </strong>web developer living in
            <strong> Portland, Oregon</strong>, soon relocating to
            <br />
            <strong>Las Vegas</strong>.
          </p>
          <ImageWrapper>
            <HeadShotImage />
          </ImageWrapper>
          <p>
            I create websites and apps that are thoughtfully designed and built
            with performance and best practices in mind.
          </p>
          <p>
            <strong>Goals for 2021:</strong> turning my free-lancing hobby into
            a focused career, reclaim lost time in 2020 not going skateboarding,
            and learn how to surf even though I live in the desert.
          </p>
        </TextWrapper>
        {/* </Grid>
        </Grid> */}
      </SectionWrapper>
    </section>
  )
}

export default AboutMe
