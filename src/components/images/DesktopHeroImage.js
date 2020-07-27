import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DesktopHero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "unsplash-desktop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 5302, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="unsplash desktop"
    />
  )
}

// * Credit this person for their image
// <span>Photo by <a href="https://unsplash.com/@nkachanovskyyy?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nikita Kachanovsky</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

export default DesktopHero
