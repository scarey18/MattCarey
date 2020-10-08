import React, { useState } from "react"
import styled from "styled-components"
import { lighten } from "polished"
import PropTypes from "prop-types"
import fetch from 'unfetch'

import * as palette from '../cssvariables'


const Form = styled.form`
	color: ${palette.mainColor};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	p {
		margin: 20px 1% 0 1%;

    span {
      width: 100%;
      color: ${palette.warning};
      margin-left: 5px;
    }

		input, textarea {
			width: 100%;
			border-radius: 20px;
			outline: none;
			border: 3px solid transparent;
			padding: 5px 15px;
      transition: border-color 250ms ease-in-out;

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
		height: 6rem;
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


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


const ContactForm = ({ onSubmission }) => {
	const [state, setState] = useState({
    name: '', email: '', message: '',
  });
  const [warnings, setWarnings] = useState({});

	function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function formIsValidated() {
    const newWarnings = {};
    const { name, email, message } = state;
    const notEmptyReg = /\w+/;
    const emailReg = /\w+@\w+\.\w+/;

    if (!notEmptyReg.test(name)) {
      newWarnings.name = 'Please fill out this field.'
    }
    if (!notEmptyReg.test(email)) {
      newWarnings.email = 'Please fill out this field.'
    } else if (!emailReg.test(email)) {
      newWarnings.email = 'Please enter a valid email address.'
    }
    if (!notEmptyReg.test(message)) {
      newWarnings.message = 'Please fill out this field.'
    }

    if (Object.keys(newWarnings).length > 0) {
      setWarnings(newWarnings);
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formIsValidated()) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': "contact",
          ...state,
        }),
      })
        .then(onSubmission)
        .catch(error => alert(error))
    }
  }

  return (
    <React.Fragment>
    	<Form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        noValidate
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
            {warnings.name && <span>{warnings.name}</span>}
            <br />
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </InputField>
        <InputField>
          <label>
            Your email:
            {warnings.email && <span>{warnings.email}</span>}
            <br />
            <input type="email" name="email" onChange={handleChange} />
          </label>
        </InputField>
        <TextAreaField>
          <label>
            Message:
            {warnings.message && <span>{warnings.message}</span>}
            <br />
            <textarea name="message" onChange={handleChange} />
          </label>
        </TextAreaField>
        <ButtonField>
          <button type="submit">
            Send
          </button>
        </ButtonField>
      </Form>
    </React.Fragment>
  )
}


ContactForm.propTypes = {
  onSubmission: PropTypes.func.isRequired,
}


export default ContactForm;