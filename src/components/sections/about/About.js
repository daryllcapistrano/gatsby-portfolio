import React, { useEffect, useRef } from "react"
import { srConfig } from "../../../utils/config"
import sr from "../../../utils/sr"
import HeadShotImage from "../../images/HeadShotImage"
import { Grid } from "@material-ui/core/"
import {
  ImageWrapper,
  TextWrapper,
  SectionWrapper,
  SectionHeader,
} from "./About.styled"

import { BiStats } from "react-icons/bi"

const AboutMe = () => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <SectionWrapper id="about" className="load-hidden" ref={revealContainer}>
      <SectionHeader>
        <span style={{ marginRight: `1em` }}>
          <BiStats />
        </span>
        <span>A Bit About Me</span>
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
              that are thoughtfully designed and built with performance and best
              practices in mind.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto eum accusantium totam sint a expedita temporibus
              repudiandae praesentium, repellat perferendis officia optio
              voluptatibus nam nemo quia error doloremque unde earum nesciunt
              delectus, at aliquam ad. Veniam quaerat quod praesentium animi nam
              debitis ex qui! Minus quam, modi omnis sapiente aliquid porro
              officia. Enim nostrum corrupti saepe iure rerum alias blanditiis
              praesentium corporis, sapiente eveniet recusandae nesciunt
              consequuntur similique doloribus repudiandae fugiat distinctio
              debitis autem expedita?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              porro repellat omnis dolorum voluptatem fuga eos laudantium, sit
              vel ea perferendis eligendi! Quod, sit totam.
            </p>
          </TextWrapper>
        </Grid>
      </Grid>
    </SectionWrapper>
  )
}

export default AboutMe
