import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { transparentize } from 'polished'
import { 
	FaChevronLeft, FaChevronRight, FaTimes 
} from 'react-icons/fa'

import * as palette from '../cssvariables'
import matchImagesToPhotos from '../utils/matchImagesToPhotos'
import managedModal from '../utils/managedmodal'
import FlexibleGatsbyImg from './FlexibleGatsbyImg'


const Modal = styled.div`
	opacity: 0;
	z-index: -1000;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background-color: ${palette.modalShadow};
	display: flex;
	justify-content: center;
	align-items: center;
	transition: opacity 350ms ease-in-out;

	&:focus {
		outline: none;
	}
`

const NavBtn = styled.button`
	position: absolute;
	z-index: 1050;
	top: 50%;
	transform: translateY(-50%);
	background: transparent;
	cursor: pointer;
	color: ${transparentize(0.5, palette.mainColor)};
	transition: color 250ms linear;

	&:hover {
		color: ${palette.mainColor};
	}
`
const LeftNavBtn = styled(NavBtn)`left: 20px`
const RightNavBtn = styled(NavBtn)`right: 20px`
const ExitBtn = styled(NavBtn)`
	top: 20px;
	right: 20px;
	transform: none;
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

	const modalStyle = showModal ? {
		opacity: 1, zIndex: 1000,
	} : {
		opacity: 0, zIndex: -1000,
	}
	const modalRef = useRef();

	const photos = matchImagesToPhotos(query.allImageSharp.edges)
		.map(photo => (
			<FlexibleGatsbyImg
				parentRef={modalRef} 
				fluid={photo.fluid} 
				alt={photo.description}
				title={photo.description}
				loading="lazy"
				maxWidth="80%"
				maxHeight="90%"
			/>
		))

	function prevPhoto() {
		if (index === 0) setIndex(photos.length - 1);
		else setIndex(index - 1);
	}

	function nextPhoto() {
		if (index === photos.length - 1) setIndex(0);
		else setIndex(index + 1);
	}

	function handleBtnClick(e, callback) {
		e.stopPropagation();
		callback();
	}

	function handleKeyDown(e) {
		if (!showModal) return;
		switch (e.key) {
			case 'Escape':
				closeModal();
				break;
			case 'ArrowRight':
				nextPhoto();
				break;
			case 'ArrowLeft':
				prevPhoto();
				break;
			default:
				break;
		}
	}

	useEffect(() => {
		if (showModal) {
			modalRef.current.focus();
		}
	}, [showModal])

	return (
		<Modal
			style={modalStyle}
			onClick={closeModal}
			onKeyDown={handleKeyDown}
			tabIndex={showModal ? "-2" : null}
			ref={modalRef}
		>
			<LeftNavBtn 
				title="Previous Photo" 
				onClick={e => handleBtnClick(e, prevPhoto)}
			>
				<FaChevronLeft size='2rem'/>
			</LeftNavBtn>
			{photos[index]}
			<RightNavBtn 
				title="Next Photo" 
				onClick={e => handleBtnClick(e, nextPhoto)}
			>
				<FaChevronRight size='2rem'/>
			</RightNavBtn>
			<ExitBtn
				title="Close Modal"
				onClick={e => handleBtnClick(e, closeModal)}
			>
				<FaTimes size='2rem'/>
			</ExitBtn>
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