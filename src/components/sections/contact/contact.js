import React, { useEffect, useRef } from "react"
import { srConfig } from "../../../config"
import sr from "../../../utils/sr"
import Grid from "@material-ui/core/Grid"
import { TextWrapper } from "./Contact.styled"
import {
  SectionWrapper,
  SectionHeader,
  SectionNumber,
  SectionTitle,
} from "../Section.styled"

const Contact = () => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <SectionWrapper id="contact" className="load-hidden" ref={revealContainer}>
      <SectionHeader>
        <SectionNumber>03.</SectionNumber>
        <SectionTitle>Get In Touch With Me</SectionTitle>
      </SectionHeader>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TextWrapper>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit
              dolorem pariatur iusto, animi saepe, itaque sequi rem nisi
              recusandae vel distinctio. Adipisci.
            </p>
          </TextWrapper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ margin: `1em` }}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              perspiciatis repellendus quia id laboriosam earum nesciunt
              explicabo laudantium aperiam facere unde, aut dignissimos
              voluptates ratione, enim ex esse, inventore at asperiores.
            </p>
          </div>
        </Grid>
      </Grid>
    </SectionWrapper>
  )
}

export default Contact
