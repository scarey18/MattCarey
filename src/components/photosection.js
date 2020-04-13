import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import * as palette from '../cssvariables'
import Article from './article'
import ContentHeader from './contentheader'
import Gallery from './gallery'
import PhotoContainer from './photocontainer'
import json from "../content/photos.json"


const StyledArticle = styled(Article)`
	background-color: ${palette.mainBackgroundColor};
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

	const matchImages = () => {
		const regex = /src\/images\/(.+\.\w{3,4})/;
		const namesList = [];
		const photos = [];

		json.photos.forEach((photo, i) => {
			const originalName = photo.image.match(regex)[1];
			if (!namesList.includes(originalName)) {
				namesList.push(originalName);
				const image = query.allImageSharp.edges.find(
					edge => edge.node.fluid.originalName === originalName
				)
				photos.push({
					aspectRatio: image.node.fluid.aspectRatio,
					id: i,
					component: (
						<PhotoContainer
							description={photo.description}
							fluid={image.node.fluid}
							key={originalName}
						/>
					),
				})
			}
		})
		
		return photos;
	}

	return (
		<StyledArticle id="photos">
			<ContentHeader>Photos</ContentHeader>
			<Gallery photos={matchImages()} />
		</StyledArticle>
	)
}


export default PhotoSection;