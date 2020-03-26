import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"


const Content = styled.div`
	transition: all 400ms ease-in-out;
	overflow: hidden;
`

const Button = styled.button`
	width: 6rem;
	padding: 5px 0;
	border-radius: 8px;
	cursor: pointer;
`


const CollapsibleContainer = ({ children, className, expand, collapsedHeight, innerHtml }) => {
	const [isExpanded, setIsExpanded] = useState(expand);

	const onBtnClick = () => {
		setIsExpanded(!isExpanded);
	}

	const linearGradient = 'linear-gradient(rgba(0, 0, 0, 0.8), 80%, transparent)';

	const contentStyle = isExpanded ? {
		maxHeight: '300vh', 
		WebkitMaskImage: 'none',
	} : {
		maxHeight: collapsedHeight,
		WebkitMaskImage: linearGradient,
	}

	const content = children ? (
		<Content style={contentStyle}>
			{children}
		</Content>
	) : (
		<Content
			style={contentStyle}
			dangerouslySetInnerHTML={{__html: innerHtml}}
		/>
	)

	return (
		<div className={className}>
			{content}
			<Button onClick={onBtnClick}>
				{isExpanded ? 'Show less' : 'Show more'}
			</Button>
		</div>
	)
}


CollapsibleContainer.propTypes = {
	children: PropTypes.node,
	expand: PropTypes.bool,
	className: PropTypes.string,
	collapsedHeight: PropTypes.string.isRequired,
	innerHtml: PropTypes.string,
}

CollapsibleContainer.defaultProps = {
	expand: false,
}


export default CollapsibleContainer;