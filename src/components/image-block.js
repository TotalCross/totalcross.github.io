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

const ImageInnerContainer = styled(Img)`
justify-content: flex-start;
display: block;
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

const ImageBlock = ({ img, caption=null, title=null, text=null, fixed=true }) => {
    if (fixed) {
    return (
        <ImageContainer>
            { title && <Title>{title}</Title>}
            <ImageInnerContainer fixed={img} alt={caption}/>
            { caption && <Caption>{caption}</Caption> } 
            { text && <Text>{text}</Text>}
        </ImageContainer>
    )} else {
        return (
            <ImageContainer2>
                { title && <Title>{title}</Title>}
                <ImageInnerContainer fluid={img} alt={caption}/>
                { caption && <Caption>{caption}</Caption> } 
                { text && <Text>{text}</Text>}
            </ImageContainer2>
        )
    }
}

export default ImageBlock;