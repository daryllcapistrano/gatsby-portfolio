import React from "react"
// import React, { useEffect, useRef } from "react"
// import { srConfig } from "../../../utils/config"
// import sr from "../../../utils/sr"
// import { Button, Grid } from "@material-ui/core/"
// import IconButton from "@material-ui/core/IconButton"
// import { IconContext } from "react-icons"
// import { FaAngleDoubleDown } from "react-icons/fa"
import { SectionWrapper, SectionHeader } from "./Contact.styled"

// import { BiStats } from "react-icons/bi"

const Contact = () => {
  // const revealContainer = useRef(null)
  // useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <section id="contact">
      <SectionWrapper>
        <SectionHeader>
          {/* <span>
            <BiStats />
          </span> */}
          {/* <span>Get In Touch</span> */}
        </SectionHeader>
        <div>
          <ul>
            <li>
              <a
                href="https://github.com/daryllcapistrano"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            {"/"}
            <li>
              <a
                href="mailto:dcapistrano.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </li>
            {"/"}
            <li>
              <a
                href="https://www.linkedin.com/in/daryll-capistrano-142b32202/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </SectionWrapper>
      {/* </Container> */}
    </section>
  )
}

export default Contact
