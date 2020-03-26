import React from "react"
import styled from "styled-components"

import * as palette from '../cssvariables'
import Article from './article'
import ContentHeader from './contentheader'
import ContactForm from './contactform'


const StyledArticle = styled(Article)`
	background-color: ${palette.secondaryBackgroundColor};

	h1 {
		margin-bottom: 7%;
	}
`


const ContactSection = () => {
	return (
		<StyledArticle id="contact">
			<ContentHeader>Contact Matt</ContentHeader>
			<ContactForm />
		</StyledArticle>
	)
}


export default ContactSection;