import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import * as palette from '../cssvariables'
import Article from './article'
import ContentHeader from './contentheader'


const StyledArticle = styled(Article)`
	background-color: ${palette.mainBackgroundColor};
	height: 100vh;
`


const PhotoSection = () => {
	return (
		<StyledArticle id="photos">
			<ContentHeader>Photos</ContentHeader>
		</StyledArticle>
	)
}


export default PhotoSection;