import React, { useEffect, useRef } from "react"
import { srConfig } from "../../../config"
import sr from "../../../utils/sr"
import { Container, Grid } from "@material-ui/core/"
// import { TextWrapper } from "./Contact.styled"
// import { Button } from "@material-ui/core"
import { MdEmail } from "react-icons/md"
import { GrInstagram } from "react-icons/gr"
import { GoMarkGithub } from "react-icons/go"
import {
  SectionWrapper,
  SectionHeader,
  SectionNumber,
  SectionTitle,
} from "../Section.styled"

import { SocialButton } from "./Contact.styled"

const Contact = () => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <SectionWrapper id="contact" style={{ height: `40.625em` }}>
      <Container className="load-hidden" ref={revealContainer}>
        <SectionHeader>
          <SectionNumber>03.</SectionNumber>
          <SectionTitle>Get In Touch With Me</SectionTitle>
        </SectionHeader>
        <Grid container style={{ textAlign: `center` }}>
          <Grid item xs={12} sm={4}>
            <SocialButton
              href="mailto:dcapistrano.dev@gmail.com"
              startIcon={<MdEmail />}
              variant="outlined"
            >
              Email
            </SocialButton>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SocialButton
              href="https://www.instagram.com/brotherdaryll"
              startIcon={<GrInstagram />}
              variant="outlined"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </SocialButton>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SocialButton
              href="https://github.com/daryllcapistrano"
              startIcon={<GoMarkGithub />}
              variant="outlined"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </SocialButton>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  )
}

export default Contact
