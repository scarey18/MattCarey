import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import * as palette from '../cssvariables'


const StyledArticle = styled.article`
	width: 100%;
	background-color: ${props => props.backgroundColor};
	position: relative;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 54px;

	& > * {
		width: 80%;
		max-width: 1080px;
		margin: 0 auto;
	}
`


const Article = ({ className, id, children, backgroundColor }) => {
	return (
		<StyledArticle 
			className={className} 
			id={id} 
			backgroundColor={backgroundColor}
		>
			{children}
		</StyledArticle>
	)
}


Article.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	children: PropTypes.node.isRequired,
	backgroundColor: PropTypes.string,
}

Article.defaultProps = {
	backgroundColor: palette.mainBackgroundColor,
}


export default Article;