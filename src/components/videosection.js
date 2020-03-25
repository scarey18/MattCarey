import React from "react"
import styled from "styled-components"

import * as palette from '../cssvariables'
import Article from './article'
import ContentHeader from './contentheader'
import VideoContainer from './videocontainer'
import data from "../content/video-urls.json"


const VideoList = styled.section`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: center;
`


const VideoSection = () => {
	return (
		<Article 
			id="videos"
			backgroundColor={palette.secondaryBackgroundColor}
		>	
			<ContentHeader>Watch Matt</ContentHeader>
			<VideoList>
				{data.videos.map(({ title, url }) => (
					<VideoContainer title={title} url={url} key={url} />
				))}
			</VideoList>
		</Article>
	)
}


export default VideoSection;