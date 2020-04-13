import React, { useContext } from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'

import { MobileContext } from './layout'


const Container = styled.div`
	display: flex;
	margin-top: 30px;
`

const Column = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	margin-right: 5px;

	&:last-child {
		margin-right: 0;
	}
`


const Gallery = ({ photos }) => {
	const isMobile = useContext(MobileContext);

	const createColumns = columnAmount => {
		const columns = [];
		for (let i = 0; i < columnAmount; i++) {
			columns.push({height: 0, photos: [], id: i});
		}
		
		photos.sort((a, b) => a.aspectRatio - b.aspectRatio);
		photos.forEach(photo => {
			columns[0].photos.push(photo);
			columns[0].height += 100 / photo.aspectRatio;
			columns.sort((a, b) => a.height - b.height);
		})

		return columns.map(column => (
			<Column key={column.id}>
				{column.photos
					.sort((a, b) => a.id - b.id)
					.map(photo => photo.component)}
			</Column>
		))
	}

	const sortedPhotos = isMobile ? createColumns(2) : createColumns(3);

	return (
		<Container>
			{sortedPhotos}
		</Container>
	)
}


Gallery.propTypes = {
	photos: PropTypes.array.isRequired,
}


export default Gallery;