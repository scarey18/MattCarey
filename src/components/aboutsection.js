import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import ContentContainer from './contentcontainer'


const Article = styled.article`
	width: 100%;
	background-color: #020202;
	position: relative;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 54px;
`

const Container = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		color: #fff;
		border-bottom: 1px solid #fff;
		padding: 10px;
	}
`

const ImgContainer = styled.div`
	width: 100%;
	max-width: 480px;
`

const BioContainer = styled.section`
	max-width: 800px;
	display: flex;
	flex-direction: column;
	margin: 20px auto;
	color: #fff;
`


const AboutSection = () => {
	const data = useStaticQuery(graphql`
		{
		  file(relativePath: {eq: "press_photo_1.jpg"}) {
		    childImageSharp {
		      fluid {
		      	...GatsbyImageSharpFluid
		      }
		    }
		  }
		  markdownRemark(fileAbsolutePath: {regex: "/.+\/biography[.]md/"}) {
		  	html
		  }
		}
	`)

	return (
		<Article id="about">
			<Container>
				<h1>Meet Matt</h1>
				<ImgContainer>
					<Img fluid={data.file.childImageSharp.fluid} />
				</ImgContainer>
				<BioContainer 
					dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
				/>
			</Container>
		</Article>
	)
}


export default AboutSection;