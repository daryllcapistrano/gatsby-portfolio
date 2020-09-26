import React, { useState, useRef } from "react"
import { useOnClickOutside } from "../common/hooks"
import FocusLock from "react-focus-lock"
import Burger from "../burgermenu/burger"
import Menu from "../burgermenu/menu"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
// import Button from "@material-ui/core/Button"

const StyledToolbar = styled(Toolbar)`
  padding: 0.25em;
  width: 100%;
  justify-content: space-around;
  background-color: #091540;
  color: #ddf8e8;
  -webkit-box-shadow: 0px 2px 40px 0px rgba(5, 12, 36, 1);
  -moz-box-shadow: 0px 2px 40px 0px rgba(5, 12, 36, 1);
  box-shadow: 0px 2px 40px 0px rgba(5, 12, 36, 1);
`

// const LinkContainer = styled.div`
//   display: flex;
//   ${"" /* justify-content: flex-end; */}
// `

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={400}>
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
        <StyledToolbar disableGutters>
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
          <span>Logo</span>

          {/* <LinkContainer>
            <Button
              color="inherit"
              variant="text"
              size="medium"
              href="#projects"
              // startIcon={<IoIosApps />}
            >
              projects
            </Button>

            <Button
              color="inherit"
              variant="text"
              size="medium"
              href="#about"
              // startIcon={<IoIosFingerPrint />}
            >
              about
            </Button>

            <Button
              color="inherit"
              variant="text"
              size="medium"
              href="#contact"
              // startIcon={<IoIosContact />}
            >
              contact me
            </Button>
          </LinkContainer> */}
        </StyledToolbar>
      </AppBar>
    </HideOnScroll>
  )
}
