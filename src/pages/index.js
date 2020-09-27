import React from "react"
import SEO from "../components/common/seo"
import Layout from "../components/common/layout"
// section components
import IntroHero from "../components/sections/intro/Intro"
import Projects from "../components/sections/projects/Projects"
import AboutMe from "../components/sections/about-me"
import Contact from "../components/sections/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Main" />
    <IntroHero />
    <Projects />
    <AboutMe />
    <Contact />
  </Layout>
)

export default IndexPage
