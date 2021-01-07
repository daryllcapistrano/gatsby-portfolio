import React from "react"
import SEO from "../components/seo"
import Layout from "../components/common/layout"
import { Intro, Projects, About, Contact } from "../sections"

const IndexPage = () => (
  <Layout>
    <SEO title="Main" />
    <Intro />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
