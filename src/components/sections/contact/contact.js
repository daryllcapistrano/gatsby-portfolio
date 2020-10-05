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

const Contact = () => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <SectionWrapper id="contact">
      <Container className="load-hidden" ref={revealContainer}>
        <SectionHeader>
          <SectionNumber>03.</SectionNumber>
          <SectionTitle>Get In Touch With Me</SectionTitle>
        </SectionHeader>
        <Grid container style={{ textAlign: `center` }}>
          <Grid item xs={4}>
            {/* <Button
              color="inherit"
              variant="text"
              size="small"
              target="_blank"
              rel="noopener noreferer"
              href="mailto:dcapistrano.dev@gmail.com"
              endIcon={<MdEmail />}
            /> */}
            <MdEmail />
          </Grid>
          <Grid item xs={4}>
            {/* <Button
              color="inherit"
              variant="text"
              size="small"
              target="_blank"
              rel="noopener noreferer"
              href="https://instagram.com/brotherdaryll"
              endIcon={<GrInstagram />}
            /> */}
            <GrInstagram />
          </Grid>
          <Grid item xs={4}>
            {/* <Button
              color="inherit"
              variant="text"
              size="small"
              target="_blank"
              rel="noopener noreferer"
              href="https://github.com/daryllcapistrano"
              endIcon={<GoMarkGithub />}
            /> */}
            <GoMarkGithub />
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  )
}

export default Contact
