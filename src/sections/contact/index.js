import React from "react"
import IconButton from "@material-ui/core/IconButton"
import { SectionWrapper, SectionHeader, SocialButtons } from "./style"
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact">
      <SectionWrapper>
        <SectionHeader>
          {/* <span>
            <BiStats />
          </span> */}
          {/* <span>Get In Touch</span> */}
        </SectionHeader>
        <SocialButtons>
          <a
            href="https://github.com/daryllcapistrano"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton aria-label="github-link">
              <FaGithub />
            </IconButton>
          </a>

          <a
            href="mailto:dcapistrano.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton aria-label="email-link">
              <FaEnvelope />
            </IconButton>
          </a>

          <a
            href="https://www.linkedin.com/in/daryll-capistrano-142b32202/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton aria-label="linkedin-link">
              <FaLinkedin />
            </IconButton>
          </a>
        </SocialButtons>
      </SectionWrapper>
      {/* </Container> */}
    </section>
  )
}

export default Contact
