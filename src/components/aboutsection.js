import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { darken } from "polished"

import * as palette from '../cssvariables'
import Article from './article'
import ContentHeader from './contentheader'
import CollapsibleContainer from './collapsiblecontainer'


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
			<ContentHeader>
				Meet Matt
			</ContentHeader>
			<ImgContainer>
				<Img fluid={data.file.childImageSharp.fluid} />
			</ImgContainer>
			<BioContainer 
				collapsedHeight="300px"
				innerHtml={data.markdownRemark.html}
			/>
		</Article>
	)
}


export default AboutSection;