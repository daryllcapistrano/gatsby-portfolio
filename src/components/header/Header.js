import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import Button from "@material-ui/core/Button"

const StyledToolbar = styled(Toolbar)`
  font-family: inherit;
  padding: 0.25em;
  width: 100%;
  background-color: #091540;
  color: #ddf8e8;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

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
          {/* <Container>
            <h1>{data.site.siteMetadata.title}</h1>
          </Container> */}
          <LinkContainer>
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
          </LinkContainer>
        </StyledToolbar>
      </AppBar>
    </HideOnScroll>
  )
}
