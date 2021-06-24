import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import { GITHUB} from "../links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const GreenButton = styled(Link)`
display: flex;
font: 600 14px/20px "Poppins", sans-serif;
text-decoration: none;
text-transform: uppercase;
padding: 10px 10px;
min-width: 120px;
background-color: #2aa75e;
color: #efefef;
border-radius: 5px;

text-align: center;
align-items: center;
justify-content: center;

min-height: 30px;
box-shadow: 0 3px 8px 0 rgb(50, 50, 50), 0 2px 10px 0 rgba(250, 250, 250, 0.4);
margin: ${props => props.margin === "true" ? "10px" : "0"};

  @media (max-width: 768px) {
    display: none;
  }
`

const WhiteButton = styled(GreenButton)`
background-color: #efefef;
color: #242424;
padding: 10px 15px;
box-shadow: 0 3px 8px 0 rgb(50, 50, 50), 0 2px 10px 0 rgba(250, 250, 250, 0.4);
@media (max-width: 768px) {
  display: inline-block;
}
`

const BlackButton = styled(GreenButton)`
background-color: #242424;
text-transform: capitalize;
color: #efefef;
padding: 10px 15px;
box-shadow: 0 3px 8px 0 rgb(50, 50, 50), 0 2px 10px 0 rgba(250, 250, 250, 0.4);
@media (max-width: 768px) {
  display: inline-block;
}
`

const Icon = styled.a`
margin-right: 0.5rem;
font-size: 2rem;
color: white;
`

const githubIcon = <Icon href={GITHUB}><FontAwesomeIcon icon={faGithub} /></Icon>;

//Fix this Github icon option to allow any kind of icon based on the "FontsAwesome" name of it
const Button = ({ link, text, color, margin="true", icon}) => {
    if (color === 'white') {
      return (
        <WhiteButton margin={margin} to={link}>{icon === "github" && githubIcon}{text}</WhiteButton>
    )
    } else if (color === 'black') {
      return (
        <BlackButton margin={margin} to={link}>{icon === "github" && githubIcon}{text}</BlackButton>
    )
    }
    return <GreenButton margin={margin} to={link}>{icon === "github" && githubIcon}{text}</GreenButton>
}

export default Button;