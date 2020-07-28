import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Container from "@material-ui/core/Container"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import Button from "@material-ui/core/Button"

const NavContainer = styled.ul`
  display: inline-flex;
  list-style-type: none;
  padding: 0;
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
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <HideOnScroll {...props}>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          <Container>{data.site.siteMetadata.title}</Container>
          <NavContainer>
            <li>
              <Button color="inherit" variant="text" size="medium">
                projects
              </Button>
            </li>
            <li>
              <Button color="inherit" variant="text" size="medium">
                about
              </Button>
            </li>
            <li>
              <Button color="inherit" variant="text" size="medium">
                contacts
              </Button>
            </li>
          </NavContainer>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}
