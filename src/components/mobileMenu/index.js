import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import Menu from "./Menu"
import Button from "./Burger"
import FocusLock from "react-focus-lock"
import Slide from "@material-ui/core/Slide"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { useOnClickOutside } from "../../hooks/useOnclickOutside"

import { HeaderWrapper, LinkContainer } from "./style"

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} in={!trigger} timeout={600}>
      {children}
    </Slide>
  )
}

export default function MobileMenu(props) {
  const [open, setOpen] = useState(false)
  const node = useRef()
  const menuId = "mobile-menu"

  useOnClickOutside(node, () => setOpen(false))

  return (
    <HideOnScroll {...props}>
      <div ref={node}>
        <FocusLock disabled={!open}>
          <Menu open={open} setOpen={setOpen} id={menuId} />
          <Button open={open} setOpen={setOpen} aria-controls={menuId} />
        </FocusLock>
      </div>
      <AppBar position="sticky" elevation={0} color="transparent">
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
    </HideOnScroll>
  )
}
