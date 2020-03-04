import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"


const Content = styled.div`
	transition: height 350ms ease-in-out;
	overflow: hidden;
`

const Button = styled.button`
	font-size: 1.2rem;
	width: 7rem;
	border-radius: 8px;
	cursor: pointer;
	transition: color 250ms ease-in-out;
`


const CollapsibleContainer = ({ children, className, expand, collapsedHeight, innerHtml }) => {
	const [isExpanded, setIsExpanded] = useState(expand);
	const [maxHeight, setMaxHeight] = useState(null);
	const contentRef = useRef();

	useEffect(() => {
		if (maxHeight === null) {
			newMaxHeight();
		}
	}, [maxHeight])

	useEffect(() => {
		window.addEventListener('resize', newMaxHeight);
		return () => window.removeEventListener('resize', newMaxHeight);
	})

	const newMaxHeight = () => {
		contentRef.current.style.height = 'auto';
		setMaxHeight(contentRef.current.offsetHeight);
		contentRef.current.style.height = isExpanded ? maxHeight : collapsedHeight;
	}

	const onBtnClick = () => {
		setIsExpanded(!isExpanded);
	}

	const linearGradient = 'linear-gradient(rgba(0, 0, 0, 0.8), 80%, transparent)';

	const contentStyle = isExpanded ? {
		height: maxHeight, 
		WebkitMaskImage: 'none',
	} : {
		height: collapsedHeight,
		WebkitMaskImage: linearGradient,
	}

	const content = children ? (
		<Content
			style={contentStyle}
			ref={contentRef}
		>
			{children}
		</Content>
	) : (
		<Content
			style={contentStyle}
			ref={contentRef}
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