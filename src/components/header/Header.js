import React, { useState, useRef } from "react"
import { useOnClickOutside } from "../../hooks/useOnclickOutside"
import FocusLock from "react-focus-lock"
import Burger from "../burgermenu/Burger"
import Menu from "../burgermenu/Menu"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import { HeaderWrapper, LinkContainer } from "./Header.styled"

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={450}>
      {children}
    </Slide>
  )
}

export default function Header(props) {
  const [open, setOpen] = useState(false)
  const node = useRef()
  const menuId = "main-menu"

  useOnClickOutside(node, () => setOpen(false))

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <HideOnScroll {...props}>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar disableGutters={true} variant="dense">
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Menu open={open} setOpen={setOpen} id={menuId} />
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            </FocusLock>
          </div>
          <HeaderWrapper>
            <LinkContainer>
              <Link to="#projects">Works</Link>
              <Link to="#about">About</Link>
              <Link to="#contact">Contact</Link>
            </LinkContainer>
          </HeaderWrapper>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}
