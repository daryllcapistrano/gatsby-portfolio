import React from "react"
import HeadShotImage from "../images/HeadShotImage"
import Grid from "@material-ui/core/Grid"
import {
  SectionWrapper,
  SectionHeader,
  SectionNumber,
  SectionTitle,
} from "./styles/SectionHeader"

const AboutMe = () => {
  return (
    <SectionWrapper id="about">
      <SectionHeader>
        <SectionNumber>02.</SectionNumber>
        <SectionTitle>Some Background</SectionTitle>
      </SectionHeader>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div style={{ margin: `1em` }}>
            <HeadShotImage />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ margin: `1em` }}>
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
          </div>
        </Grid>
      </Grid>
    </SectionWrapper>
  )
}

export default AboutMe
