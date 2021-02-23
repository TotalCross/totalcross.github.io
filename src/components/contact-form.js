import React, { Component } from "react"
import styled from "styled-components"

// import styles from "./contact-form.module.scss";

const OutterContainer = styled.div`
width: auto;
background: transparent;
text-align: center;
color: #ffffff;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
padding-bottom: 200px;
`
const FormContainer = styled.form`
display: flex;
flex-direction: column;
@media only screen and (max-width: 600px) {
    width: 80%;
}
`
const FormInput = styled.input`
background: rgba(255, 255, 255, 0.9);
border: none;
border-radius: 15px;
padding: 25px 30px;
margin: 20px 0;
font: 300 14px/20px "Poppins", sans-serif;
`
const FormTextArea = styled.textarea`
background: rgba(255, 255, 255, 0.9);
border: none;
border-radius: 15px;
padding: 25px 30px;
margin: 20px 0;
font: 300 14px/20px "Poppins", sans-serif;
`
const Title = styled.h1`
padding-top: 140px;
padding-bottom: 65px;
font: 800 46px/60px "Poppins", sans-serif;
color: #ffffff;
`
const SubmitButton = styled.button`
font: 500 17px/28px "Poppins", sans-serif;
background-color: #2aa75e;
color: #ffffff;
text-transform: uppercase;
border: none;
border-radius: 15px;
padding: 10px 0;
margin-top: 20px;
`

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    country: "",
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <OutterContainer>
        <Title>How can we help you?</Title>
        <FormContainer
          id="contact-form"
          action="https://getform.io/f/fe92951a-4b98-4328-bd32-566820ce3504"
          method="POST"
        >
          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />

          <FormInput
            type="email"
            name="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <FormInput
            type="country"
            name="country"
            placeholder="Country"
            value={this.state.country}
            onChange={this.handleInputChange}
          />

          <FormTextArea
            rows="8"
            cols="40"
            form="contact-form"
            type="text"
            name="message"
            placeholder="Questions/Comments"
            value={this.state.message}
            onChange={this.handleInputChange}
          />

          <SubmitButton type="submit">
            Send
          </SubmitButton>
        </FormContainer>
      </OutterContainer>
    );
  }
}

export default ContactForm;
