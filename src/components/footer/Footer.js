import React from "react"
import { StyledFooter } from "./Footer.styled"

function Copyright() {
  return (
    <small style={{ opacity: `.2` }}>
      {" "}
      Copyright © {new Date().getFullYear()} Daryll Capistrano{" "}
    </small>
  )
}

export default function Footer() {
  return (
    <StyledFooter>
      <Copyright />
    </StyledFooter>
  )
}
