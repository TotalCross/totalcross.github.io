import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

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

const TextBlock = styled.div`
width: 45%;
margin-left: 60px;
text-align: left;

@media only screen and (max-width: 1000px) {
    width: 100vw;
    margin-left: 0px;
    text-align: center;
}
`

const Title = styled.h1`
font: 800 46px/60px "Poppins", sans-serif;
margin: 0 auto 50px;
color: #c62f2e;

@media only screen and (max-width: 1000px) {
    padding-top: 250px;
    margin-bottom: 0px;
}

@media only screen and (max-width: 600px) {
    font: 800 36px/40px "Poppins", sans-serif;
    margin: 20px auto 20px;
    width: 90%;
    padding-top: 50px;
}
`
const Tagline = styled.p`
font: 500 17px/28px "Poppins", sans-serif;
font-weight: 300;
color: #8f8f8f;
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


const HeroBlock = (title, tagline) => {
    return (
        <Hero>
            <TextBlock>
                <Title>
                    {title}
                </Title>
                <Tagline>
                    {tagline}
                </Tagline>
            </TextBlock>
        </Hero>
    )
}

function HeroCenter({ title, tagline=null, bgImg=null} ) {
    if (bgImg === null) {
        return (HeroBlock(title, tagline))
    }
    else {
        return (
            <BGContainer
                Tag="section"
                fluid={bgImg}
            > 
                {HeroBlock(title, tagline)}
            </BGContainer>
        )
    }
}

export default HeroCenter
