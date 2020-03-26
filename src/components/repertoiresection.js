import React, { useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { lighten } from "polished"

import * as palette from '../cssvariables'
import { MobileContext } from './layout'
import Article from './article'
import ContentHeader from './contentheader'
import CollapsibleContainer from './collapsiblecontainer'


const StyledArticle = styled(Article)`
	background-color: ${palette.secondaryBackgroundColor};
`

const RepContainer = styled(CollapsibleContainer)`
	max-width: 800px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px auto;
	color: ${palette.mainColor};

	h2 {
		color: ${palette.mainColor};
		font-size: 1.3rem;
		margin: 2rem 0 1rem 0;
	}

	p {
		margin: 0.5rem 0 0.5rem 1rem;
	}

	button {
		margin: 15px;
		background-color: ${palette.btnBackground};
		color: ${palette.white};
		box-shadow: 0 1px 3px 0 ${palette.boxShadow};

		&:hover {
			background-color: ${lighten(0.15, palette.btnBackground)};
		}
	}
`


const RepertoireSection = () => {
	const data = useStaticQuery(graphql`
		{
		  file(relativePath: {eq: "repertoire.md"}) {
		    childMarkdownRemark {
		      html
		    }
		  }
		}
	`)

	return (
		<StyledArticle id="repertoire">
			<ContentHeader>Repertoire</ContentHeader>
			<RepContainer 
				collapsedHeight="600px"
				maxHeight="1000vh"
				innerHtml={data.file.childMarkdownRemark.html}
			/>
		</StyledArticle>
	)
}


export default RepertoireSection;