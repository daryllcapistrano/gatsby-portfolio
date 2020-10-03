import React from "react"
import SEO from "../components/common/seo"
import Layout from "../components/common/layout"
import { Intro, Projects, About, Contact } from "../components/sections"

const IndexPage = () => (
  <Layout>
    <SEO title="Main" />
    <Intro />
    <Projects />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
