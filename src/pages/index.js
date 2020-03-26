import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSection from "../components/homesection"
import AboutSection from "../components/aboutsection"
import VideoSection from '../components/videosection'
import PhotoSection from '../components/photosection'
import ContactSection from '../components/contactsection'

const IndexPage = () => (
  <Layout>
    <SEO title='Home'/>
    <HomeSection/>
    <AboutSection/>
    <VideoSection/>
    <PhotoSection/>
    <ContactSection/>
  </Layout>
)

export default IndexPage;
