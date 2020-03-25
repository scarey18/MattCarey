import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { lighten } from "polished"
import { isMobileOnly } from "react-device-detect";

import * as palette from '../cssvariables'
import Article from './article'
import ContentHeader from './contentheader'
import CollapsibleContainer from './collapsiblecontainer'


const ImgContainer = styled.div`
	width: 100%;
	max-width: 480px;
	margin-top: 20px;
`


const BioContainerStyle = `
	max-width: 800px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px auto;
	color: ${palette.mainColor};

	button {
		margin: 15px;
		background-color: ${palette.btnBackground};
		color: ${palette.white};

		&:hover {
			background-color: ${lighten(0.15, palette.btnBackground)};
		}
	}
`

const MobileContainer = styled(CollapsibleContainer)`
	${BioContainerStyle}
`

const NonMobileContainer = styled.div`
	${BioContainerStyle}
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

	const BioContainer = isMobileOnly ? (
		<MobileContainer 
			collapsedHeight="300px"
			innerHtml={data.markdownRemark.html}
		/>
	) : (
		<NonMobileContainer 
			dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}
		/>
	)

	return (
		<Article 
			id="about" 
			backgroundColor={palette.mainBackgroundColor}
		>
			<ContentHeader>
				Meet Matt
			</ContentHeader>
			<ImgContainer>
				<Img fluid={data.file.childImageSharp.fluid} />
			</ImgContainer>
			{BioContainer}
		</Article>
	)
}


export default AboutSection;