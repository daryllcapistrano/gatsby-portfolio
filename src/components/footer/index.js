import React from "react"
import { StyledFooter } from "./style"

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
