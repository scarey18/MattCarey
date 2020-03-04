import React from "react"
import styled from "styled-components"
import { darken } from "polished"

import * as palette from '../cssvariables'
import Article from './article'
import ContentHeader from './contentheader'
import LazyLoadedYoutube from './lazyloadedyoutube'
import data from "../content/video-urls.json"


const VideoList = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: center;
`

const VideoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 20px 10px 0 10px;
	background-color: ${palette.mainColor};
	cursor: pointer;
	transition: background-color 250ms ease-in-out;
	color: ${palette.mainBackgroundColor};
	border-radius: 5px;

	&:hover {
		background-color: ${palette.mainColor};
	}
`


const VideoSection = () => {
	return (
		<Article 
			id="videos"
			backgroundColor={palette.backgroundPalette[1]}
		>	
			<ContentHeader>Watch Matt</ContentHeader>
			<VideoList>
				{data.videos.map(({ title, url }) => (
					<VideoContainer>
						<LazyLoadedYoutube title={title} url={url} />
						<p>{title}</p>
					</VideoContainer>
				))}
			</VideoList>
		</Article>
	)
}


export default VideoSection;