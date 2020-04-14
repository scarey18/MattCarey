import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'

import { useMobileContext } from '../utils/mobilecontext'
import PhotoContainer from './photocontainer'


const Container = styled.div`
	display: flex;
	margin-top: 30px;
`

const Column = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	margin-right: 5px;
	position: relative;

	&:last-child {
		margin-right: 0;
	}
`


const Gallery = ({ photos, openModal }) => {
	const isMobile = useMobileContext();
	const columns = isMobile ? createColumns(2) : createColumns(3);

	function createColumns(columnAmount) {
		const columns = [];
		for (let i = 0; i < columnAmount; i++) {
			columns.push({height: 0, photos: [], id: i});
		}
		
		photos.sort(
			(a, b) => a.fluid.aspectRatio - b.fluid.aspectRatio
		)
		photos.forEach(photo => {
			columns[0].photos.push(photo);
			columns[0].height += 100 / photo.fluid.aspectRatio;
			columns.sort((a, b) => a.height - b.height);
		})

		columns.forEach(column => {
			column.photos.sort((a, b) => a.id - b.id);
			column.children = column.photos.map(photo => (
				<PhotoContainer
					description={photo.description}
					fluid={photo.fluid}
					handleClick={() => openModal(photo.id)}
					key={photo.id}
				/>
			))
		})

		return columns.map(column => (
			<Column key={column.id}>
				{column.children}
			</Column>
		))
	}

	return (
		<Container>
			{columns}
		</Container>
	)
}


Gallery.propTypes = {
	photos: PropTypes.array.isRequired,
	openModal: PropTypes.func.isRequired,
}


export default Gallery;