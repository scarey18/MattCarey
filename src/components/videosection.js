import React from "react"
import styled from "styled-components"

import * as palette from '../cssvariables'
import Article from './article'
import ContentHeader from './contentheader'
import VideoContainer from './videocontainer'
import data from "../content/video-urls.json"


const StyledArticle = styled(Article)`
	background-color: ${palette.secondaryBackgroundColor};
`

const VideoList = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: center;
`


const VideoSection = () => {
	return (
		<StyledArticle id="videos">	
			<ContentHeader>Watch Matt</ContentHeader>
			<VideoList>
				{data.videos.map(({ title, url }) => (
					<VideoContainer title={title} url={url} key={url} />
				))}
			</VideoList>
		</StyledArticle>
	)
}


export default VideoSection;