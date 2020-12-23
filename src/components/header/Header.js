import React, { useState, useRef } from "react"
import { useOnClickOutside } from "../../hooks/useOnclickOutside"
import FocusLock from "react-focus-lock"
import Burger from "../burgermenu/Burger"
import Menu from "../burgermenu/Menu"
// import { useStaticQuery, graphql } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import { HeaderWrapper } from "./Header.styled"

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
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
          <HeaderWrapper>
            <div>
              <a href="#about" style={{ textDecoration: `none` }}>
                {/* <span aria-hidden="true">💸</span> */}
                <Button>About me</Button>
              </a>
              <a href="#projects" style={{ textDecoration: `none` }}>
                {/* <span aria-hidden="true">💁🏻‍♂️</span> */}
                <Button>Featured Projects</Button>
              </a>
              <a href="#contact" style={{ textDecoration: `none` }}>
                {/* <span aria-hidden="true">📩</span> */}
                <Button>Get in touch</Button>
              </a>
            </div>
          </HeaderWrapper>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}
