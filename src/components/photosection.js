import React, { useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import StackGrid from 'react-stack-grid'

import * as palette from '../cssvariables'
import { MobileContext } from './layout'
import Article from './article'
import ContentHeader from './contentheader'
import PhotoContainer from './photocontainer'
import json from "../content/photos.json"


const StyledArticle = styled(Article)`
	background-color: ${palette.mainBackgroundColor};
`

const Gallery = styled(StackGrid)`
	margin-top: 30px;
`


const PhotoSection = () => {
	const query = useStaticQuery(graphql`
		{
		  allImageSharp {
		    edges {
		      node {
		        fluid {
		        	...GatsbyImageSharpFluid
		          originalName
		        }
		      }
		    }
		  }
		}
	`)

	const isMobile = useContext(MobileContext);

	const regex = /.+\/(\w+\.\w{3,4})/;
	const photos = json.photos.map(photo => {
		const originalName = photo.image.match(regex)[1];
		const image = query.allImageSharp.edges.find(
			edge => edge.node.fluid.originalName === originalName
		)
		return (
			<a 
				href={image.node.fluid.src} 
				target="_blank"
				rel="noopener noreferrer"
				key={originalName}
			>
				<PhotoContainer
					description={photo.description}
					fluid={image.node.fluid}
				/>
			</a>
		)
	})

	return (
		<StyledArticle id="photos">
			<ContentHeader>Photos</ContentHeader>
			<Gallery 
				columnWidth={isMobile ? '49%' : '33%'}
			>
				{photos}
			</Gallery>
		</StyledArticle>
	)
}


export default PhotoSection;