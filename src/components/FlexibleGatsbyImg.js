import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import Img from "gatsby-image"


const FlexibleGatsbyImg = props => {
	const [style, setStyle] = useState({width: 1, height: 1});
	const timeout = useRef();

	useEffect(() => {
		restyle();
		window.addEventListener('resize', triggerRestyle);
		return () => {
			window.removeEventListener('resize', triggerRestyle);
			clearTimeout(timeout.current);
		}
	}, [props])

	function triggerRestyle() {
		timeout.current = window.setTimeout(restyle, 20);
	}

	function restyle() {
		const parentRect = props.parentRef.current.getBoundingClientRect();
		const imgWidth = props.fluid.presentationWidth;
		const imgHeight = props.fluid.presentationHeight;
		const widthRatio = parentRect.width / imgWidth;
		const heightRatio = parentRect.height / imgHeight;

		if (widthRatio <= heightRatio) {
			const maxWidth = parseFloat(props.maxWidth) / 100;
			const calculatedWidth = Math.min(
				imgWidth, parentRect.width * maxWidth
			)
			setStyle({
				width: calculatedWidth,
				height: calculatedWidth / props.fluid.aspectRatio,
			})
		} else {
			const maxHeight = parseFloat(props.maxHeight) / 100;
			const calculatedHeight = Math.min(
				imgHeight, parentRect.height * maxHeight
			)
			setStyle({
				height: calculatedHeight,
				width: calculatedHeight * props.fluid.aspectRatio,
			})
		}
	}

	return (
		<Img {...props} style={style} />
	)
}


FlexibleGatsbyImg.propTypes = {
	fluid: PropTypes.object.isRequired,
	className: PropTypes.string,
	parentRef: PropTypes.object.isRequired,
	maxWidth: PropTypes.string,
	maxHeight: PropTypes.string,
}

FlexibleGatsbyImg.defaultProps = {
	maxWidth: '100%',
	maxHeight: '100%',
}


export default FlexibleGatsbyImg;