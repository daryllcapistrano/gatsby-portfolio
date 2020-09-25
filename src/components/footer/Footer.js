import React from "react"
import styled from "styled-components"
import { Button } from "@material-ui/core"
import { TiDownloadOutline } from "react-icons/ti"
import { MdMailOutline } from "react-icons/md"
import { GoMarkGithub } from "react-icons/go"

const BottomNav = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 2em 0 0 0;
  padding: 0.25em;
  background-color: #091540;
  color: #ddf8e8;
`

export default function Footer() {
  return (
    <BottomNav id="contact">
      <Button
        color="inherit"
        variant="text"
        size="small"
        // href="#about" link to resume on github
        startIcon={<TiDownloadOutline />}
      >
        resume
      </Button>

      <div>
        <Button
          color="inherit"
          variant="text"
          size="small"
          target="_blank"
          rel="noopener noreferer"
          href="mailto:dcapistrano.dev@gmail.com"
          endIcon={<MdMailOutline />}
        />
        <Button
          color="inherit"
          variant="text"
          size="small"
          target="_blank"
          rel="noopener noreferer"
          href="https://github.com/daryllcapistrano"
          endIcon={<GoMarkGithub />}
        />
        {/* <Button
          color="inherit"
          variant="text"
          size="small"
          target="_blank"
          rel="noopener noreferer"
          href="https://github.com/daryllcapistrano"
          endIcon={<GoMarkGithub />}
        ></Button> */}
      </div>
    </BottomNav>
  )
}
