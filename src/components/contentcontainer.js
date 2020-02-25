import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Container = styled.div`
	width: 80%;
	max-width: 1080px;
	margin: 0 auto;
`


const ContentContainer = ({ className, children }) => (
	<Container className={className}>{children}</Container>
)


ContentContainer.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
}


export default ContentContainer;