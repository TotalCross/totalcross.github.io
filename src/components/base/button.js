import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import { GITHUB} from "../../links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export const GreenButton = styled(Link)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  font: var(--font-text);
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;

  padding: 7px 20px;
  margin: ${props => props.hasMargin ? "10px" : "0"};
  min-width: 120px;

  background-color: var(--color-secundary);
  color: var(--color-light);
  border-radius: 5px;

  transition: transform 0.3s, filter 0.5s;

  min-height: 30px;
  box-shadow: 0 3px 8px 0 rgb(50, 50, 50), 0 2px 10px 0 rgba(250, 250, 250, 0.4);

    @media (max-width: 768px) {
      display: none;
    }

    &:hover {
      transform: scale(1.05);
      filter: brightness(1.1);
    }
`

const WhiteButton = styled(GreenButton)`
background-color: var(--color-light);
color: var(--color-dark);
box-shadow: 0 3px 8px 0 rgb(50, 50, 50), 0 2px 10px 0 rgba(250, 250, 250, 0.4);
@media (max-width: 768px) {
  display: inline-block;
}
`

const BlackButton = styled(GreenButton)`
background-color: var(--color-dark);
text-transform: capitalize;
color: var(--color-light);
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
const Button = ({ link, text, color, hasMargin, icon}) => {
    if (color === 'white') {
      return (
        <WhiteButton to={link}>{icon === "github" && githubIcon}{text}</WhiteButton>
    )
    } else if (color === 'black') {
      return (
        <BlackButton to={link}>{icon === "github" && githubIcon}{text}</BlackButton>
    )
    }
    return <GreenButton to={link}>{icon === "github" && githubIcon}{text}</GreenButton>
}

export default Button;