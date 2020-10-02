import React, { useEffect, useRef } from "react"
import { srConfig } from "../../../config"
import sr from "../../../utils/sr"
import HeadShotImage from "../../images/HeadShotImage"
import Grid from "@material-ui/core/Grid"
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
    <SectionWrapper id="about" ref={revealContainer}>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate quam accusantium voluptatem ducimus, nemo ipsum dolor
              error expedita, rem molestiae quae beatae dolorum harum inventore
              et aliquid voluptatibus repellat nesciunt provident maxime
              excepturi, natus consequuntur. Accusantium laboriosam enim officia
              quo, optio ad sapiente perspiciatis tempora eligendi! Ipsam,
              maxime. Eveniet iste fuga eligendi sapiente magni voluptatem ipsum
              necessitatibus blanditiis ipsa, provident doloremque eum quos
              minus at saepe officia nam, tempore voluptates! Impedit sapiente
              velit id voluptas debitis eos. Tempore autem praesentium veritatis
              consectetur quia velit non aut possimus enim saepe, delectus quam
              facere magni aspernatur in vel tempora nisi mollitia quo!
            </p>
          </TextWrapper>
        </Grid>
      </Grid>
    </SectionWrapper>
  )
}

export default AboutMe
