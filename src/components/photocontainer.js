import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import PropTypes from 'prop-types'

import * as palette from '../cssvariables'


const Container = styled.div`
	position: relative;
	cursor: pointer;
`

const Overlay = styled.span`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 300ms ease-in-out;
	color: ${palette.mainColor};
	background-color: ${palette.modalShadow};
	opacity: 0;

	&:hover {
		opacity: 1;
	}
`


const PhotoContainer = ({ description, fluid }) => {
	return (
		<Container>
			<Img fluid={fluid} alt={description} loading="lazy" />
			<Overlay>{description}</Overlay>
		</Container>
	)
}


PhotoContainer.propTypes = {
	description: PropTypes.string.isRequired,
	fluid: PropTypes.object.isRequired,
}


export default PhotoContainer;