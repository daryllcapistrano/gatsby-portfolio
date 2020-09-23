import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`

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
    <StyledImg
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="unsplash desktop"
    />
  )
}

export default DesktopHero
