import React, { useState } from "react"
import styled from "styled-components"
import { lighten } from "polished"

import * as palette from '../cssvariables'


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


const Form = styled.form`
	color: ${palette.mainColor};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	p {
		margin: 20px 1% 0 1%;

		input, textarea {
			width: 100%;
			border-radius: 20px;
			outline: none;
			border: 3px solid transparent;
			padding: 5px 15px;

			&:focus {
				border-color: ${palette.btnBackground};
			}
		}
	}
`

const InputField = styled.p`
	width: 40%;

	@media (max-width: 600px) {
		width: 82%;
	}

	input {
		height: 2rem;
	}
`

const TextAreaField = styled.p`
	width: 82%;

	textarea {
		height: 4rem;
	}
`

const ButtonField = styled.p`
	width: 82%;

	button {
		padding: 7px 15px;
		border-radius: 20px;
		cursor: pointer;
		transition: background-color 250ms ease-in-out;
		background-color: ${palette.btnBackground};
		color: ${palette.white};
		box-shadow: 0 1px 3px 0 ${palette.boxShadow};

		&:hover, &:focus {
			background-color: ${lighten(0.15, palette.btnBackground)};
		}
	}
`


const ContactForm = () => {
	const [state, setState] = useState({});

	const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .catch((error) => alert(error))
  }

  return (
  	<Form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
    	<input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: 
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <InputField>
        <label>
          Your name:
          <br />
          <input type="text" name="name" onChange={handleChange} required />
        </label>
      </InputField>
      <InputField>
        <label>
          Your email:
          <br />
          <input type="email" name="email" onChange={handleChange} required />
        </label>
      </InputField>
      <TextAreaField>
        <label>
          Message:
          <br />
          <textarea name="message" onChange={handleChange} required />
        </label>
      </TextAreaField>
      <ButtonField>
        <button type="submit">Send</button>
      </ButtonField>
    </Form>
  )
}


export default ContactForm;