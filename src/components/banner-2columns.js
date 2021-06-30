import React from "react";
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image";
import Button from "./button";

const BGContainer = styled(BackgroundImage)`
display: flex;
align-items: center;

background-position: center top;
background-repeat: no-repeat;
background-size: cover;
background-color: #EFEFEF;
text-align: center;
color: #ffffff;
justify-content: center;
font-family: "Poppins", sans-serif;

@media only screen and (max-width: 1000px) {
    flex-direction: column;
}

@media only screen and (max-width: 600px) {
  
  width: 100%;
}
`

const Title = styled.h2`
display: block;
font: 600 30px/38px "Poppins", sans-serif;
margin: 80px auto ${props => props.titleBottomMargin ? props.titleBottomMargin : "10px" };
color: ${(props) => {return (props.theme === "dark" ? "#fff" : "#c62f2e")}};
text-align: center;
max-width: 600px;

@media only screen and (max-width: 1000px) {
    padding-top: auto;
    margin-bottom: 20px;
}

@media only screen and (max-width: 600px) {
    font: 800 36px/40px "Poppins", sans-serif;
    margin: 50px auto 20px;
    width: 90%;
    padding-top: 50px;
}
`
const Subtitle = styled.h3`
font: 500 17px/28px "Poppins", sans-serif;
font-weight: 300;
color: ${props => props.subtitleColor ? props.subtitleColor : "#8f8f8f" };
margin: 0 auto 20px;
text-align: center;
max-width: 680px;

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

const Space = styled.div`
display: flex;
width: 50%;
padding: 0 40px;
@media only screen and (max-width: 600px) {
    width: 90%;
    padding: 0;
}
@media only screen and (min-width: 1400px) {
    padding: 0 80px;
}
`
const SubContainer = styled.div`
display: flex;
padding: 20px;
width: 80%;
margin: ${props => props.subContainerTopMargin ? props.subContainerTopMargin : "0"} auto 0;
@media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    width: 95%;
}
`

const BtContainer = styled.div`
display: flex;
justify-content: center;
padding: 20px 0;
`

const Banner = (title, subtitle, spaces, btText, btRef, btColor, theme, titleBottomMargin, subtitleColor, subContainerTopMargin) => {
    return (
        <div>
            {title && <Title theme={theme} titleBottomMargin={titleBottomMargin}>{title}</Title>}
            {subtitle && <Subtitle subtitleColor={subtitleColor}>{subtitle}</Subtitle>}
            <SubContainer subContainerTopMargin={subContainerTopMargin}>
                <Space>{spaces[0]}</Space>
                <Space>{spaces[1]}</Space>
            </SubContainer>
            { btText !== null && (<BtContainer><Button link={btRef} text={btText} color={btColor}/></BtContainer>) }
        </div>
    )
}

const LightBanner = styled.div`
background-color: #EFEFEF;
color:#212121;
border: solid rgba(0, 0, 0, 0);
`

const DarkBanner = styled.div`
background-color: #212121;
color: #EFEFEF;
h2, h3, h4, h5, h6 {
    color: #EFEFEF;
}
`

function Banner2C({ title=null, subtitle=null, spaces, btText=null, btRef=null, theme="light", bgImg=null, btColor='green', titleBottomMargin, subtitleColor, subContainerTopMargin} ) {
    if (bgImg != null) {
        return (
            <BGContainer
                Tag="section"
                fluid={bgImg}
            > 
                {Banner(title, subtitle, spaces, btText, btRef, btColor, "dark", titleBottomMargin, subtitleColor, subContainerTopMargin)}
            </BGContainer>
        )
    }
    else if (theme === "light") {
            return (
            <LightBanner>
                {Banner(title, subtitle, spaces, btText, btRef, btColor,"light", titleBottomMargin, subtitleColor, subContainerTopMargin)}
            </LightBanner>
            )
    }
    else {
        return (
            <DarkBanner>
                {Banner(title, subtitle, spaces, btText, btRef, "dark", titleBottomMargin, subtitleColor, subContainerTopMargin)}
            </DarkBanner>
            )
    }
}

export default Banner2C;
