import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSection from "../components/homesection"
import AboutSection from "../components/aboutsection"
import VideoSection from '../components/videosection'
import PhotoSection from '../components/photosection'
import RepertoireSection from '../components/repertoiresection'
import ContactSection from '../components/contactsection'

const IndexPage = () => {
	return (
	  <Layout>
	    <SEO title='Home'/>
	    <HomeSection/>
	    <AboutSection/>
	    <VideoSection/>
	    <PhotoSection/>
	    <RepertoireSection/>
	    <ContactSection/>
	  </Layout>
	)
}

export default IndexPage;
