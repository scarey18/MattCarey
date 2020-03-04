import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { darken } from "polished"

import * as palette from '../cssvariables'
import ContentContainer from './contentcontainer'
import CollapsibleContainer from './collapsiblecontainer'


const Article = styled.article`
	width: 100%;
	background-color: ${palette.mainBackgroundColor};
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
		color: ${palette.mainColor};
		border-bottom: 1px solid ${palette.mainColor};
		padding: 10px;
	}
`

const ImgContainer = styled.div`
	width: 100%;
	max-width: 480px;
`

const BioContainer = styled(CollapsibleContainer)`
	max-width: 800px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px auto;
	color: ${palette.mainColor};

	button {
		margin: 15px;
		background-color: ${palette.mainColor};
		color: ${palette.mainBackgroundColor};

		&:hover {
			background-color: ${darken(0.2, palette.mainColor)};
		}
	}
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
					collapsedHeight="300px"
					innerHtml={data.markdownRemark.html}
				/>
			</Container>
		</Article>
	)
}


export default AboutSection;