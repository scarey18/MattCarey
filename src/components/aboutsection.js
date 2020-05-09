import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { lighten } from "polished"

import * as palette from '../cssvariables'
import { useMobileContext } from '../utils/mobilecontext'
import Article from './article'
import ContentHeader from './contentheader'
import CollapsibleContainer from './collapsiblecontainer'


const StyledArticle = styled(Article)`
	background-color: ${palette.mainBackgroundColor};
`


const ImgContainer = styled.div`
	width: 100%;
	max-width: 480px;
	margin-top: 30px;
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
		box-shadow: 0 1px 3px 0 ${palette.boxShadow};

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
		  image: file(relativePath: {eq: "press_photo_1.jpg"}) {
		    childImageSharp {
		      fluid(maxWidth: 480, quality: 100) {
		      	...GatsbyImageSharpFluid_withWebp
		      }
		    }
		  }
		  bio: file(relativePath: {eq: "biography.md"}) {
		    childMarkdownRemark {
		      html
		    }
		  }
		}
	`)

	const isMobile = useMobileContext();

	const BioContainer = isMobile ? (
		<MobileContainer 
			collapsedHeight="600px"
			innerHtml={data.bio.childMarkdownRemark.html}
		/>
	) : (
		<NonMobileContainer 
			dangerouslySetInnerHTML={{__html: data.bio.childMarkdownRemark.html}}
		/>
	)

	return (
		<StyledArticle id="about">
			<ContentHeader>
				Meet Matt
			</ContentHeader>
			<ImgContainer>
				<Img 
					fluid={data.image.childImageSharp.fluid} 
					alt="Matt Carey headshot" 
				/>
			</ImgContainer>
			{BioContainer}
		</StyledArticle>
	)
}


export default AboutSection;