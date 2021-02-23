import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Card = styled.div`
background-color: #212121;
font: 500 20px/28px "Poppins", sans-serif;
font-weight: 800;
color: #ffffff;
justify-content: flex-start;
width: 200px;
border-radius: 15px;
text-align: left;
padding: 20px 20px 25px 20px;
margin: 10px 20px;
`

const CardIcon = styled.div`
font-size: 56px;
`

const CardTitle = styled.div`
padding-top: 15px;
padding-bottom: 25px;
`

const CardArrow = styled.div`
color: #ffffff;
float: right;
text-align: center;
width: 30px;
height: 30px;
border: solid #ffffff 2px;
border-radius: 20px;
font-size: 16px;


:hover {
    transform: scale(1.1);
    color: $text-accent;
    border-color: $text-accent;
  }
`

const SquareCard2 = ({ icon, text, url, route }) => {
  const arrow = <FontAwesomeIcon icon={faArrowRight} />;
  return (
    <Card>
      <CardIcon>{icon}</CardIcon>
      <CardTitle>{text}</CardTitle>
      {route ? (
        <Link to={route}>
          <CardArrow>{arrow}</CardArrow>
        </Link>
      ) : (
        <a target="_blank" rel="noopener noreferrer" href={url}>
          <CardArrow>{arrow}</CardArrow>
        </a>
      )}
    </Card>
  );
};

export default SquareCard2;
