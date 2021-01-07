import React from "react"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { HeaderWrapper, LinkContainer } from "./style"

export default function Header() {
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar disableGutters={true} variant="dense">
        <HeaderWrapper>
          <LinkContainer>
            <Link to="#projects">Works</Link>
            <Link to="#about">About</Link>
            <Link to="#contact">Contact</Link>
          </LinkContainer>
        </HeaderWrapper>
      </Toolbar>
    </AppBar>
  )
}
