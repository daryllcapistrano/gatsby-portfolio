import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import { useOnClickOutside } from "../../hooks/useOnclickOutside"
import FocusLock from "react-focus-lock"
import Menu from "../burgermenu/Menu"
import Burger from "../burgermenu/Burger"
import Slide from "@material-ui/core/Slide"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { HeaderWrapper, LinkContainer } from "./Header.styled"

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={600}>
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
      <AppBar
        position="fixed"
        style={{ backgroundColor: `#191e24` }}
        elevation={0}
      >
        <Toolbar disableGutters={true} variant="dense">
          <HeaderWrapper>
            <LinkContainer>
              <Link to="#projects">Works</Link>
              <Link to="#about">About</Link>
              <Link to="#contact">Contact</Link>
            </LinkContainer>
          </HeaderWrapper>
        </Toolbar>
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Menu open={open} setOpen={setOpen} id={menuId} />
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          </FocusLock>
        </div>
      </AppBar>
    </HideOnScroll>
  )
}
