import React from "react";
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image";
import Button from "../base/button";

import * as Simple from "../base/simple-styles"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    gap: 30px;
    padding: 90px 30px;

    @media only screen and (max-width: 600px) {
        padding: 50px 30px;

    }
`
export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 30px;

    @media only screen and (max-width: 600px) {
        margin-bottom: 0;

    }
`
export const SubContainer = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    gap: 60px;

    & > * {
        flex: 1;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 95%;
        gap: 30px;
    }

    @media only screen and (min-width: 1400px) {
        width: 70%;
    }
`
export const Space = styled.div`
    display: flex;

    @media only screen and (max-width: 600px) {
        justify-content: center;
        width: 90%;
        padding: 0;
    }
    
`
export const BtContainer = styled.div`
    display: flex;
    
    
    @media only screen and (max-width: 600px) {
        width: 85%;
    }
    @media only screen and (min-width: 600px) {
        margin-top: 20px;
    }
`

const Banner = (title, subtitle, theme, spaces, btText, btRef, btColor) => {
    return (
        <Container>
            <Header>
                {title && <Simple.Title theme={theme}>{title}</Simple.Title>}
                {subtitle && <Simple.Subtitle>{subtitle}</Simple.Subtitle>}
            </Header>
            <SubContainer>
                {spaces.map((space) => {
                    return <Space>{space}</Space>
                })}
            </SubContainer>
            { btText !== null && (<BtContainer><Button link={btRef} text={btText} color={btColor}/></BtContainer>) }
        </Container>
    )
}

export const BGContainer = styled(BackgroundImage)`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #EFEFEF;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`

export const LightBanner = styled.section`
    background-color: var(--color-light);
    color: var(--color-dark);
`

export const DarkBanner = styled(LightBanner)`
    background-color: var(--color-dark);
    color: var(--color-light);
`

function Banner2C({ className, title=null, subtitle=null, theme="light", spaces, btText=null, btRef=null, btColor='green', bgImg=null} ) {
    if (bgImg != null) {
        return (
            <BGContainer className={className}
                Tag="section"
                fluid={bgImg}
            > 
                {Banner(title, subtitle, "dark", spaces, btText, btRef, btColor)}
            </BGContainer>
        )
    }
    else if (theme === "light") {
            return (
            <LightBanner className={className}>
                {Banner(title, subtitle,"light", spaces, btText, btRef, btColor)}
            </LightBanner>
            )
    }
    else {
        return (
            <DarkBanner className={className}>
                {Banner(title, subtitle, "dark", spaces, btText, btRef, btColor)}
            </DarkBanner>
            )
    }
}

export default Banner2C;
