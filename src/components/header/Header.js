import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Container from "@material-ui/core/Container"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
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
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          <Container>{data.site.siteMetadata.title}</Container>
          <Container>
            <p>projects</p>
          </Container>
          <Container>
            <p>about me</p>
          </Container>
          <Container>
            <p>contact</p>
          </Container>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}
