import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"

import * as palette from '../cssvariables'
import matchImagesToPhotos from '../utils/matchImagesToPhotos'
import managedModal from '../utils/managedmodal'


const Container = styled.div`
	visibility: ${props => props.visibility};
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background-color: ${palette.modalShadow};
	z-index: 1000;
`


const GalleryModal = ({ showModal, closeModal, index }) => {
	const visibility = showModal ? 'visible' : 'hidden';

	return (
		<Container visibility={visibility} onClick={closeModal}>

		</Container>
	)
}


GalleryModal.propTypes = {
	showModal: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
}


export default managedModal(GalleryModal);