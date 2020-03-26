import React, { useState } from "react"
import styled from "styled-components"

import * as palette from '../cssvariables'
import Article from './article'
import ContentHeader from './contentheader'
import ContactForm from './contactform'
import Card from './card'


const StyledArticle = styled(Article)`
	background-color: ${palette.mainBackgroundColor};

	h3 {
		color: ${palette.mainColor};
		text-align: center;
		margin-top: 40px;
	}
`

const SuccessCard = styled(Card)`
	background-color: ${palette.btnBackground};
	color: ${palette.mainColor};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1.3rem 2rem;
	width: auto;
	border-radius: 100px;
	margin-top: 30px;

	h3, p {
		margin: 5px 0;
		text-align: center;
	}
`


const ContactSection = () => {
	const [formWasSubmitted, setFormWasSubmitted] = useState(false);

	const content = formWasSubmitted ? (
		<SuccessCard>
			<h3>Thank you for your message!</h3>
			<p>Matt will get back in touch with you soon. Have a great day!</p>
		</SuccessCard>
	) : (
		<ContactForm onSubmission={() => setFormWasSubmitted(true)} />
	)

	return (
		<StyledArticle id="contact">
			<ContentHeader>Contact Matt</ContentHeader>
			<h3>
				For booking, please contact&nbsp;
				<a 
					href="http://www.elegyartistmanagement.com/agency.php?view=contacts"
					target="_blank"
					rel="noopener noreferrer"
				>Elegy Artist Management.</a>
			</h3>
			{content}
		</StyledArticle>
	)
}


export default ContactSection;