import React from "react"
import styled from "styled-components"
import Button from "./button"
import ImageBlock from "../components/image-block"

const TextContainer = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin: auto 20px;
`

const BtContainer = styled.div`
display: flex;
text-align: center;
`

const Title = styled.h3`
color: #c62f2e;
margin-top: 0;
margin-bottom: 10px;
`

const Text = styled.p`
font-family: "Poppins", sans-serif;
`

const TextBlock = ({ img=null, caption=null, title=null, text=null, btText=null, btRef=null, btColor='green' }) => {
    return (
        <TextContainer>
            { title !== null && <Title>{title}</Title>}
            { img !== null && <ImageBlock 
                img={img} 
                caption={caption} 
                /> }
            { text !== null && text.map(paragraph => (
                <Text>{paragraph}</Text>
            ))}
            { btText !== null && <BtContainer><Button text={btText} link={btRef} color={btColor}/> </BtContainer>}
        </TextContainer>
    )
}

export default TextBlock;