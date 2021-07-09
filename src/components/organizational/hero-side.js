import React from "react";
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import * as Simple from "../base/simple-styles";

const Hero = styled.div`
display: flex;
align-items: center;
height: 614px;
text-align: center;
color: #ffffff;
justify-content: center;

@media only screen and (max-width: 1000px) {
    flex-direction: column;
}

@media only screen and (max-width: 600px) {
  height: 600px;
  width: 100%;
}
`
const BGContainer = styled(BackgroundImage)`
display: flex;
align-items: center;
height: 614px;
background-position: center top;
background-repeat: no-repeat;
background-size: cover;
background-color: #212121;
text-align: center;
color: #ffffff;
justify-content: center;

@media only screen and (max-width: 1000px) {
    flex-direction: column;
}

@media only screen and (max-width: 600px) {
  height: 600px;
  width: 100%;
}
`

export const TextBlock = styled.div`
width: 45%;
margin-left: 60px;
text-align: left;

@media only screen and (max-width: 1000px) {
    width: 100vw;
    margin-left: 0px;
    text-align: center;
}

@media only screen and (min-width: 1400px) {
    width: 31%;
    margin-right: 10%;
}
`

export const Title = styled(Simple.Title)`
font: 800 36px "Poppins", sans-serif;
margin: 0 auto 10px;
color: #ffffff;
text-align: start;

@media only screen and (max-width: 1000px) {
    padding-top: 250px;
    margin-bottom: 0px;
}

@media only screen and (max-width: 600px) {
    font: 800 36px/40px "Poppins", sans-serif;
    margin: 50px auto 20px;
    width: 90%;
}
// `

const Tagline = styled.p`
font: 500 20 "Poppins", sans-serif;
font-weight: 500;
color: var(--color-light);
filter: brightness(75%);
margin: 0 auto 20px;

@media only screen and (max-width: 1000px) {
    margin-bottom: 0px;
}

@media only screen and (max-width: 600px) {
    font: 300 16px/20px "Poppins", sans-serif;
    font-weight: 300;
    width: 90%;
    margin: 0 auto 20px;
}
`

const ImageBlock = styled.div`
transform: rotate(18deg);

@media only screen and (max-width: 1000px) {
    transform: scale(0.4) translateX(-5%) translateY(-60%);
}
`

const HeroBlock = (title, className, tagline, img, imgText) => {
    return (
        <Hero className={className}>
            <TextBlock>
                <Title>
                    {title}
                </Title>
                <Tagline>
                    {tagline}
                </Tagline>
            </TextBlock>
            <ImageBlock>
                {img != null?
                    <Img 
                    fixed={img}
                    alt={imgText}
                    />
                :
                    <></>
                }
            </ImageBlock>
        </Hero>
    )
}

function HeroSide({ title, className, tagline="", img=null, imgText=null, bgImg=null} ) {
    if (bgImg === null) {
        return (HeroBlock(title, className, tagline, img, imgText))
    }
    else {
        return (
            <BGContainer
                Tag="section"
                fluid={bgImg}
            > 
                {HeroBlock(title, className, tagline, img, imgText)}
            </BGContainer>
        )
    }
}

export default HeroSide;
