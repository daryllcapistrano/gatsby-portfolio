import React from "react"
import { StyledFooter } from "./Footer.styled"

function Copyright() {
  return <p> Copyright © {new Date().getFullYear()} Daryll Capistrano </p>
}

export default function Footer() {
  return (
    <StyledFooter>
      <Copyright />
    </StyledFooter>
  )
}
