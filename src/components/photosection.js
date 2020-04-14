import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import * as palette from '../cssvariables'
import Article from './article'
import ContentHeader from './contentheader'
import Gallery from './gallery'
import GalleryModal from './gallerymodal'
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
		        	...GatsbyImageSharpFluid_withWebp
		          originalName
		        }
		      }
		    }
		  }
		}
	`)
	const photos = matchImagesToPhotos(query.allImageSharp.edges);

	const [showModal, setShowModal] = useState(false);
	const [modalIndex, setModalIndex] = useState(0);

	function openModal(id=0) {
		setShowModal(true);
		setModalIndex(id);
	}

	return (
		<StyledArticle id="photos">
			<ContentHeader>Photos</ContentHeader>
			<Gallery photos={photos} openModal={openModal} />
			<GalleryModal 
				showModal={showModal}
				closeModal={() => setShowModal(false)}
				index={modalIndex}
				setIndex={setModalIndex}
			/>
		</StyledArticle>
	)
}


export default PhotoSection;