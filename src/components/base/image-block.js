import React from "react";
import styled from "styled-components"
import Img from "gatsby-image";

export const ImageContainer = styled.div`
display: flex;
flex-grow: 1 1;
flex-direction: column;
width: 100%;

text-align: start;
`
export const ImageInnerContainer = styled(Img)`

border-radius: ${props => props.hasBorder ? "var(--strong-round)" : "" }; 
box-shadow: ${props => props.hasShadow ? "var(--low-normal-shadow)" : "" };
`
export const Title = styled.h4`
font-size: 22px;
color: var(--color-mid-grey);

margin: 0 0 0.5rem 0.5rem;
`
export const Text = styled.p`
color: var(--color-mid-grey);
`
export const Caption = styled(Text)`
margin: 1rem 0 0 0.5rem;
width: 96%;
`

const ImageBlock = ({ img, caption=null, title=null, text=null, fixed=true, hasBorder, hasShadow, link }) => {
    if (fixed) {
    return (
        <ImageContainer>
            { title && <Title>{title}</Title>}
            <a href={link}>
                <ImageInnerContainer hasBorder={hasBorder} hasShadow={hasShadow} fixed={img} alt={caption}/>
            </a>
            { caption && <Caption>{caption}</Caption> } 
            { text && <Text>{text}</Text>}
        </ImageContainer>
    )} else {
        return (
            <ImageContainer>
                { title && <Title>{title}</Title>}
                <a href={link}>
                    <ImageInnerContainer hasBorder={hasBorder} hasShadow={hasShadow} fluid={img} alt={caption}/>
                </a>
                { caption && <Caption>{caption}</Caption> } 
                { text && <Text>{text}</Text>}
            </ImageContainer>
        )
    }
}

export default ImageBlock;