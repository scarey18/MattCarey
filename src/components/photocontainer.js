import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import PropTypes from 'prop-types'

import * as palette from '../cssvariables'


const Anchor = styled.div`
	position: relative;
	width: 100%;
	padding-top: ${props => props.paddingTop};
	margin-bottom: 5px;
`


const Container = styled.div`
	z-index: 5;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translateX(-50%) translateY(-50%);
	cursor: pointer;
	width: 100%;

	&:hover {
		z-index: 10;
		box-shadow: 0 0 7px 2px ${palette.boxShadow};
		width: calc(100% + 30px);
	}
`


const PhotoContainer = ({ description, fluid, handleClick }) => {
	const paddingTop = 100 / fluid.aspectRatio;

	return (
		<Anchor paddingTop={`${paddingTop}%`}>
			<Container onClick={handleClick}>
				<Img 
					fluid={fluid} 
					alt={description}
					title={description}
					loading="lazy" 
				/>
			</Container>
		</Anchor>
	)
}


PhotoContainer.propTypes = {
	description: PropTypes.string.isRequired,
	fluid: PropTypes.object.isRequired,
	handleClick: PropTypes.func,
}


export default PhotoContainer;