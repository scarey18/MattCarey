import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImg from "gatsby-background-image"
import styled from "styled-components"


const StyledBackgroundImg = styled(BackgroundImg)`
	width: 100%;
	height: 100%;
	background-size: auto 100%;
	background-color: #020202;
	position: relative;
`

const NameContainer = styled.div`
	display: flex;
	flex-direction: column;
	color: #fff;
	position: absolute;
	top: 30%;
	left: 55%;

	h1 {
		color: #fff;
		font-size: 2.5rem;
		@media screen and (max-width: 376px) {
			font-size: 1.80rem;
		}
	}

	p {
		font-size: 1.3rem;
		@media screen and (max-width: 376px) {
			font-size: 0.9rem;
		}
	}
`


const HomeSection = () => {
	const data = useStaticQuery(graphql`
		query {
		  file(relativePath: {eq: "press_photo_2.jpg"}) {
		    childImageSharp {
		      fluid {
		      	...GatsbyImageSharpFluid
		      }
		    }
		  }
		}
	`);

	return (
		<StyledBackgroundImg
			Tag="article"
			fluid={data.file.childImageSharp.fluid}
		>
			<NameContainer>
				<h1>Matthew Carey</h1>
				<p>Baritone - Opera | Concert | Theater</p>
			</NameContainer>
		</StyledBackgroundImg>
	);
}


export default HomeSection;