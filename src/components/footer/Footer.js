import React from "react"
import { Button } from "@material-ui/core"
import { MdEmail } from "react-icons/md"
import { GrInstagram } from "react-icons/gr"
import { GoMarkGithub } from "react-icons/go"
import { StyledFooter } from "./Footer.styled"

export default function Footer() {
  return (
    <StyledFooter>
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
    </StyledFooter>
  )
}
