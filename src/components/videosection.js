import React from "react"
import styled from "styled-components"

import * as palette from '../cssvariables'
import Article from './article'
import ContentHeader from './contentheader'
import LazyLoadedYoutube from './lazyloadedyoutube'
import data from "../content/video-urls.json"


const VideoList = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
`


const VideoSection = () => {
	return (
		<Article id="videos">	
			<ContentHeader>Watch Matt</ContentHeader>
			<VideoList>
				{data.videos.map(({ title, url }) => (
					<LazyLoadedYoutube title={title} url={url} />
				))}
			</VideoList>
		</Article>
	)
}


export default VideoSection;