import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSection from "../components/homesection"
import AboutSection from "../components/aboutsection"

const IndexPage = () => (
  <Layout>
    <SEO title='Home'/>
    <HomeSection/>
    <AboutSection/>
  </Layout>
)

export default IndexPage;
