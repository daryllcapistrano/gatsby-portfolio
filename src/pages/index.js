import React from "react"
import SEO from "../components/common/seo"
import Layout from "../components/common/layout"
// section components
import IntroHero from "../components/sections/intro-hero"
import Projects from "../components/sections/projects"
import AboutMe from "../components/sections/about-me"

const IndexPage = () => (
  <Layout>
    <SEO title="Main" />
    <IntroHero />
    <Projects />
    <AboutMe />
  </Layout>
)

export default IndexPage
