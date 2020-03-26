import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import * as palette from '../cssvariables'


const StyledArticle = styled.article`
	width: 100%;
	background: ${palette.mainBackgroundColor};
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 4rem 0 2rem 0;
	min-height: 60%;

	& > * {
		width: 80%;
		max-width: 1080px;
		margin: 0 auto;
	}
`


const Article = ({ className, id, children }) => {
	return (
		<StyledArticle 
			className={className} 
			id={id} 
		>
			{children}
		</StyledArticle>
	)
}


Article.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	children: PropTypes.node.isRequired,
}


export default Article;