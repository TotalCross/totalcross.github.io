import React from "react";
import styled from "styled-components"
import Button from "./button";

const Title = styled.h2`
display: block;
font: 600 30px/38px "Poppins", sans-serif;
margin: 0 auto ${props => props.titleBottomMargin ? props.titleBottomMargin : "50px" };
color: ${props => props.titleColor ? props.titleColor : "#c62f2e" };
text-align: center;
width: 50%;

@media only screen and (max-width: 1000px) {
    padding-top: auto;
    margin-bottom: 50px;
}

@media only screen and (max-width: 600px) {
    font: 600 36px/40px "Poppins", sans-serif;
    margin: 0 auto;
    width: 90%;
    padding-top: 50px;
    padding-bottom: 50px;
}
`
const Subtitle = styled.h3`
font: 500 17px/28px "Poppins", sans-serif;
font-weight: 300;
color: ${props => props.subtitleColor ? props.subtitleColor : "#212121" };
margin: 0 auto 20px;

text-align: center;
width: ${props => props.subtitleWidth ? props.subtitleWidth : "70%" };

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
justify-content: center;
align-items: stretch;
flex-wrap: wrap;
margin: 0 auto;
@media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    width: 98%;
}
`
const SubContainer = styled.div`
display: flex;
padding: 20px;
@media only screen and (min-width: 1000px) {
    max-width: 1300px;
    margin: 0 auto;
}
`
const Container = styled.div`
justify-content: center;
border: solid transparent;
padding: 60px 0;
`

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`

const Banner = (title, subtitle, space, btText, btRef, btColor, titleColor, titleBottomMargin, subtitleColor, subtitleWidth) => {
    return (
        <Container>
            {title && <Title titleColor={titleColor} titleBottomMargin={titleBottomMargin}>{title}</Title>}
            {subtitle && <Subtitle subtitleColor={subtitleColor} subtitleWidth={subtitleWidth}>{subtitle}</Subtitle>}
            {space && <SubContainer>
                <Space>{space}</Space>
                </SubContainer>
                }
            { btText !== null && <ButtonContainer>
                <Button link={btRef} text={btText} color={btColor}/> 
                </ButtonContainer>
                }
        </Container>
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
`

function Banner1C({ title=null, subtitle=null, space=null, btText=null, btRef=null, theme="light", btColor="green", titleColor, titleBottomMargin, subtitleColor, subtitleWidth} ) {
    if (theme === "light") {
        return (
            <LightBanner>
                {Banner(title, subtitle, space, btText, btRef, btColor, titleColor, titleBottomMargin, subtitleColor, subtitleWidth)}
                
            </LightBanner>
            )
    }
    else {
        return (
            <DarkBanner>
                {Banner(title, subtitle, space, btText, btRef, btColor, titleColor, titleBottomMargin, subtitleColor, subtitleWidth)}
            </DarkBanner>
            )
    }
}

export default Banner1C;
