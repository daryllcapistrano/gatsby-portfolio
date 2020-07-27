import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Container from "@material-ui/core/Container"

const Header = () => {
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
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Container>{data.site.siteMetadata.title}</Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
