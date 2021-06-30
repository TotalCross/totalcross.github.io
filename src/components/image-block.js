import React from "react";
import styled from "styled-components"
import Img from "gatsby-image";

const ImageContainer = styled.div`
flex-grow: 1 1;
flex-direction: column;
`
const ImageContainer2 = styled.div`
flex-grow: 1;
flex-direction: column;
`
//Props as temporary measure to make component a little more versatile
//Instead of width and height, you can use width and aspect ratio
const ImageInnerContainer = styled(Img)`
justify-content: flex-start;
display: block;

border-radius: ${props => props.hasBorder === "true" ? "15px" : "" }; 
box-shadow: ${props => props.hasShadow === "true" ? "0 0 5px rgba(0, 0, 0, 0.3)" : "" }; 
width: ${props => props.width};
height: ${props => props.height};
`
const Title = styled.h4`
color: #656565;
margin-bottom: 0.5rem;
font-size: 1.2rem;
`
const Text = styled.p`
color: #656565;
`
const Caption = styled(Text)`
margin-top: 0.4rem;
font-size: 0.8rem;
font-weight: 500;
`


const ImageBlock = ({ img, caption=null, title=null, text=null, fixed=true, hasBorder, hasShadow, width, height, link }) => {
    if (fixed) {
    return (
        <ImageContainer>
            { title && <Title>{title}</Title>}
            <a href={link}>
                <ImageInnerContainer hasBorder={hasBorder} hasShadow={hasShadow} width={width} height={height} fixed={img} alt={caption}/>
            </a>
            { caption && <Caption>{caption}</Caption> } 
            { text && <Text>{text}</Text>}
        </ImageContainer>
    )} else {
        return (
            <ImageContainer2>
                { title && <Title>{title}</Title>}
                <a href={link}>
                    <ImageInnerContainer hasBorder={hasBorder} hasShadow={hasShadow} width={width} height={height} fluid={img} alt={caption}/>
                </a>
                { caption && <Caption>{caption}</Caption> } 
                { text && <Text>{text}</Text>}
            </ImageContainer2>
        )
    }
}

export default ImageBlock;