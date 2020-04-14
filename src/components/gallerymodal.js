import React, { useRef } from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as palette from '../cssvariables'
import matchImagesToPhotos from '../utils/matchImagesToPhotos'
import managedModal from '../utils/managedmodal'
import FlexibleGatsbyImg from './FlexibleGatsbyImg'


const Modal = styled.div`
	visibility: ${props => props.visibility};
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background-color: ${palette.modalShadow};
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
`


const GalleryModal = ({ showModal, closeModal, index, setIndex }) => {
	const query = useStaticQuery(graphql`
		{
		  allImageSharp {
		    edges {
		      node {
		        fluid {
		        	...GatsbyImageSharpFluid_withWebp
		          originalName
		          presentationWidth
		          presentationHeight
		        }
		      }
		    }
		  }
		}
	`)
	const photos = matchImagesToPhotos(query.allImageSharp.edges);
	const visibility = showModal ? 'visible' : 'hidden';
	const modalRef = useRef();

	return (
		<Modal 
			visibility={visibility} 
			onClick={closeModal} 
			ref={modalRef}
		>
			<FlexibleGatsbyImg
				parentRef={modalRef} 
				fluid={photos[index].fluid} 
				alt={photos[index].description}
				title={photos[index].description}
				loading="lazy"
				maxWidth="80%"
				maxHeight="90%"
			/>
		</Modal>
	)
}


GalleryModal.propTypes = {
	showModal: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	setIndex: PropTypes.func.isRequired,
}


export default managedModal(GalleryModal, '#gatsby-focus-wrapper');