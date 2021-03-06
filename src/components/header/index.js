import React from "react"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { HeaderWrapper, LinkContainer } from "./style"

export default function Header() {
  return (
    <HeaderWrapper>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar disableGutters={true} variant="dense">
          <LinkContainer>
            <Link to="#projects">Works</Link>
            <Link to="#about">About</Link>
            <Link to="#contact">Contact</Link>
          </LinkContainer>
        </Toolbar>
      </AppBar>
    </HeaderWrapper>
  )
}
