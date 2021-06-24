import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

const GreenButton = styled(Link)`
display: inline-block;
font: 600 14px/20px "Poppins", sans-serif;
text-decoration: none;
text-transform: uppercase;
padding: 10px 10px;
min-width: 120px;
background-color: #2aa75e;
color: #efefef;
border-radius: 5px;
text-align: center;
min-height: 30px;
box-shadow: 0 3px 8px 0 rgb(50, 50, 50), 0 2px 10px 0 rgba(250, 250, 250, 0.4);
margin: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`

const WhiteButton = styled(GreenButton)`
background-color: #efefef;
color: #242424;
padding: 10px 20px;
box-shadow: 0 3px 8px 0 rgb(50, 50, 50), 0 2px 10px 0 rgba(250, 250, 250, 0.4);
@media (max-width: 768px) {
  display: inline-block;
}
`

const BlackButton = styled(GreenButton)`
background-color: #242424;
color: #efefef;
padding: 10px 20px;
box-shadow: 0 3px 8px 0 rgb(50, 50, 50), 0 2px 10px 0 rgba(250, 250, 250, 0.4);
@media (max-width: 768px) {
  display: inline-block;
}
`

const Button = ({ link, text, color }) => {
    if (color === 'white') {
      return (
        <WhiteButton to={link}>{text}</WhiteButton>
    )
    } else if (color === 'black') {
      return (
        <BlackButton to={link}>{text}</BlackButton>
    )
    }
    return <GreenButton to={link}>{text}</GreenButton>
}

export default Button;