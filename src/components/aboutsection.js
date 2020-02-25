import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import ContentContainer from './contentcontainer'


const Article = styled.article`
	width: 100%;
	background-color: #020202;
	position: relative;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 54px;
`

const Container = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		color: #fff;
		border-bottom: 1px solid #fff;
		padding: 10px;
	}
`

const ImgContainer = styled.div`
	width: 100%;
	max-width: 480px;
`

const BioContainer = styled.div`
	max-width: 800px;
	display: flex;
	flex-direction: column;
	margin: 20px auto;
	color: #fff;
`


const AboutSection = () => {
	const data = useStaticQuery(graphql`
		query {
		  file(relativePath: {eq: "press_photo_1.jpg"}) {
		    childImageSharp {
		      fluid {
		      	...GatsbyImageSharpFluid
		      }
		    }
		  }
		}
	`)

	return (
		<Article id="about">
			<Container>
				<h1>Meet Matt</h1>
				<ImgContainer>
					<Img fluid={data.file.childImageSharp.fluid} />
				</ImgContainer>
				<BioContainer>
					<p>
						Baritone Matthew Carey has been a member of the voice faculty at Arkansas State University (ASU) since 1997. He has been the music director and conductor for the ASU Theater Department's Musical and has co-hosted the College of Fine Arts radio program "Spotlight on the Arts" on public radio NPR affiliate KASU 91.9 FM.
					</p>
					<p>
						Matthew Carey has sung with opera companies throughout the United States as well as Germany, and his leading roles include Guglielmo, Valentin, Figaro in Barbiere di Seviglia, Alfonso in La Favorita, Heerufer in Lohengrin, Lescaut in Manon, Marcello in La Bohème, Ford in Falstaff, Silvio in I Pagliacci and Don Giovanni. Matt has performed with the symphony orchestras of Hamburg, Kotka (Finland), Santa Barbara, the NDR Orchester of Bremen, the Delta Symphony Orchestra and the Arkansas Symphony Orchestra.
					</p>
					<p>
						He has conducted Vocal Master Classes throughout the state of Arkansas and along with his colleagues Marika Kyriakos, Sandra Seay and Bethania Baray, he conducts a weekly Studio Class open to all voice students. He is a regular adjudicator at State and Regional NATS competitions and his students frequently reach the Finals.
					</p>
					<p>
						For the last 9 years, Matthew Carey has been a licensed Speech-Language Pathologist, specializing in Singing Voice Therapy- the habilitation of the injured singing voice. Future activities include regional presentations of The Singer’s Preventative Maintenance Program and additional research on the singing voice, as well as guest artist recitals.
					</p>
				</BioContainer>
			</Container>
		</Article>
	)
}


export default AboutSection;