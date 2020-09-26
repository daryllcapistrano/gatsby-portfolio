import React, { useState, useRef } from "react"
import { useOnClickOutside } from "../../hooks/useOnclickOutside"
import FocusLock from "react-focus-lock"
import Burger from "../burgermenu/Burger"
import Menu from "../burgermenu/Menu"
// import { useStaticQuery, graphql } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import { StyledToolbar } from "./Header.styled"

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
        <StyledToolbar>
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
          <span
            style={{
              width: `50%`,
              textAlign: `end`,
            }}
          >
            <h2>
              <span role="img" aria-label="h2">
                {" "}
                😤 😤 😤{" "}
              </span>
            </h2>
          </span>
        </StyledToolbar>
      </AppBar>
    </HideOnScroll>
  )
}
