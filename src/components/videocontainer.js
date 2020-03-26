import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { lighten } from "polished"
import { isMobile } from "react-device-detect";

import * as palette from '../cssvariables'
import Card from './card'


const Container = styled(Card)`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	margin: 30px 10px 0 10px;
	padding: 5px 10px 0 10px;
	background-color: ${palette.mainBackgroundColor};
	cursor: pointer;
	transition: all 250ms ease-in-out;
	color: ${palette.mainColor};
	position: relative;
	bottom: 0;

	iframe {
		width: 450px;
		max-width: 80vw;
		height: 231px;
		max-height: calc((80vw / 16) * 9);
		z-index: 90;
	}

	&:hover {
		background-color: ${lighten(0.04, palette.mainBackgroundColor)};
		bottom: 10px;
	}
`


const VideoContainer = ({ title, url }) => {
	const [loadVideo, setLoadVideo] = useState(false);

	const regex = /(v=|\.be\/|\/embed\/)(\w+)&?/;
	const id = url.match(regex)[2];
	const embedUrl = `https://www.youtube.com/embed/${id}?rel=0`;
	const imgUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
	const srcdoc = `<style>*{padding:0;margin:0;overflow:hidden;cursor:pointer}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black;background-color:transparent}</style><a href='${embedUrl}'><img src='${imgUrl}' alt='${title}' loading='lazy'><span>▶</span></a>`

	const handleHoverOrClick = () => {
		if (!loadVideo && !isMobile) {
			setLoadVideo(true);
		}
	}

	const videoFrame = loadVideo ? (
		<iframe
		  src={embedUrl}
		  frameBorder="0"
		  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		  allowFullScreen={true}
		  title={title}
		></iframe>
	) : (
		<iframe
		  src={embedUrl}
		  srcDoc={srcdoc}
		  frameBorder="0"
		  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		  allowFullScreen={true}
		  title={title}
		  loading="lazy"
		></iframe>
	)

	return (
		<Container 
			onMouseEnter={handleHoverOrClick}
			onClick={handleHoverOrClick}
		>
			{videoFrame}
			<p>{title}</p>
		</Container>
	)
}


VideoContainer.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}


export default VideoContainer;