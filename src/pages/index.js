import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSection from "../components/homesection"
import AboutSection from "../components/aboutsection"
import VideoSection from '../components/videosection'

const IndexPage = () => (
  <Layout>
    <SEO title='Home'/>
    <HomeSection/>
    <AboutSection/>
    <VideoSection/>
  </Layout>
)

export default IndexPage;
