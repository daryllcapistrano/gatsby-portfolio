import React from "react"
import SEO from "../components/common/seo"
import Layout from "../components/common/layout"
// section components
import AboutMe from "../components/sections/about-me"
import IntroHero from "../components/sections/intro-hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Main" />
    <IntroHero />
    <AboutMe />
  </Layout>
)

export default IndexPage
