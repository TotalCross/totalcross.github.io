import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

// import styles from "./content-card.module.scss";
const CardContainer = styled.div`
display: flex;
font: $font-h3;
font-weight: 800;
color: $text;
justify-content: flex-start;
width: 200px;
border-radius: 15px;
text-align: left;
padding: 20px 20px 25px 20px;
margin: 10px 20px;
min-width: 40vw;
@media only screen and (max-width: 1500px) {
    min-width: 80vw;
}
@media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    // border: solid blue;
    min-width: 100vw;
    padding-left: 0;
    padding-right: 0;
}
`
const CardImage = styled(Img)`
border-radius: 10px;
@media only screen and (max-width: 299px) {
    display: none;
}
`
const CardText = styled.div`
padding: 0 20px;
`
const CardTitle = styled.div`
padding-top: 15px;
padding-bottom: 10px;
font: 500 20px/25px Poppins;
color: #161616;
opacity: 1;
text-align: left;
`
const CardSubtitle = styled.div`
text-align: left;
font: 500 17px/24px Poppins;
color: #707070;
`


const SquareCard = (props) => {
  const {
    imageURL,
    image,
    title,
    subtitle,
    author,
    date,
    url,
  } = props;
  return (
    <a href={url}>
      <CardContainer>
        <div>
          { imageURL ? (
            <img src={imageURL} alt={title} />
          ) :
         (<CardImage fixed={image} alt={title} />)
          }
        </div>
        <CardText>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          <CardSubtitle>{author}</CardSubtitle>
          <CardSubtitle>{date}</CardSubtitle>
        </CardText>
      </CardContainer>
    </a>
  );
};

export default SquareCard;