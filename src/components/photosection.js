import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import * as palette from '../cssvariables'
import Article from './article'
import ContentHeader from './contentheader'
import Gallery from './gallery'
import matchImagesToPhotos from '../utils/matchImagesToPhotos'


const StyledArticle = styled(Article)`
	background-color: ${palette.mainBackgroundColor};
	padding-bottom: 5rem;
`


const PhotoSection = () => {
	const query = useStaticQuery(graphql`
		{
		  allImageSharp {
		    edges {
		      node {
		        fluid(maxWidth: 360) {
		        	...GatsbyImageSharpFluid
		          originalName
		        }
		      }
		    }
		  }
		}
	`)

	const photos = matchImagesToPhotos(query.allImageSharp.edges);

	return (
		<StyledArticle id="photos">
			<ContentHeader>Photos</ContentHeader>
			<Gallery photos={photos} />
		</StyledArticle>
	)
}


export default PhotoSection;