import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeadShotImage from "../images/HeadShotImage"

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
    <header>
      <div>{data.site.siteMetadata.title}</div>
      <div>
        <HeadShotImage />
      </div>
      <div>
        <button>asdf</button>
        <button>asdf</button>
        <button>adsf</button>
      </div>
    </header>
  )
}

export default Header
