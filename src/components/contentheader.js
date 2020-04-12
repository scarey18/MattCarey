import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import * as palette from '../cssvariables'


const Header = styled.h1`
	color: ${palette.mainColor};
	padding: 10px;
	width: auto;

	&:after {
		content: '';
		display: block;
		margin: 0 auto;
		width: 5rem;
		padding-top: 20px;
		border-bottom: 1px solid ${palette.mainColor};
	}
`


const ContentHeader = ({ className, children }) => {
	return (
		<Header className={className}>
			{children}
		</Header>
	)
}


ContentHeader.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string.isRequired,
}


export default ContentHeader;