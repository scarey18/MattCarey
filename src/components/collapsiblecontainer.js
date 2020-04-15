import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"


const Content = styled.div`
	transition: height 400ms ease-in-out;
	overflow: hidden;
`

const Button = styled.button`
	width: 6rem;
	padding: 5px 0;
	border-radius: 8px;
	cursor: pointer;
`


const CollapsibleContainer = ({ children, className, expand, collapsedHeight, innerHtml }) => {
	const [isExpanded, setIsExpanded] = useState(true);
	const contentRef = useRef();
	const maxHeight = useRef('auto');

	useEffect(() => {
		maxHeight.current = contentRef.current.offsetHeight;
		setIsExpanded(expand);
	}, [])

	function onBtnClick() {
		setIsExpanded(!isExpanded);
	}

	const linearGradient = 'linear-gradient(rgba(0, 0, 0, 0.8), 80%, transparent)';

	const contentStyle = isExpanded ? {
		height: maxHeight.current, 
		WebkitMaskImage: 'none',
	} : {
		height: collapsedHeight,
		WebkitMaskImage: linearGradient,
	}

	const content = children ? (
		<Content style={contentStyle} ref={contentRef}>
			{children}
		</Content>
	) : (
		<Content
			style={contentStyle}
			dangerouslySetInnerHTML={{__html: innerHtml}}
			ref={contentRef}
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
	maxHeight: PropTypes.string.isRequired,
	innerHtml: PropTypes.string,
}

CollapsibleContainer.defaultProps = {
	expand: false,
}


export default CollapsibleContainer;