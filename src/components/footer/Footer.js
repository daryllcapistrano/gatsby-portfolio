import React from "react"
import styled from "styled-components"
import { Button } from "@material-ui/core"
import { MdEmail } from "react-icons/md"
import { GrInstagram } from "react-icons/gr"
import { GoMarkGithub } from "react-icons/go"

const BottomNav = styled.footer`
  display: flex;
  justify-content: center;
  margin: 2em 0;
  padding: 0.25em;
  background-color: #091540;
  color: #ddf8e8;
`

export default function Footer() {
  return (
    <BottomNav>
      <div>
        <Button
          color="inherit"
          variant="text"
          size="small"
          target="_blank"
          rel="noopener noreferer"
          href="mailto:dcapistrano.dev@gmail.com"
          endIcon={<MdEmail />}
        />
        <Button
          color="inherit"
          variant="text"
          size="small"
          target="_blank"
          rel="noopener noreferer"
          href="https://instagram.com/brotherdaryll"
          endIcon={<GrInstagram />}
        />
        <Button
          color="inherit"
          variant="text"
          size="small"
          target="_blank"
          rel="noopener noreferer"
          href="https://github.com/daryllcapistrano"
          endIcon={<GoMarkGithub />}
        ></Button>
      </div>
    </BottomNav>
  )
}
