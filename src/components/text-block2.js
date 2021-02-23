import React from "react"
import styled from "styled-components"
import Button from "./button"
import ImageBlock from "../components/image-block"

const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;
font-family: "Poppins", sans-serif;
`
const Title = styled.h4`
color: #c62f2e;
`
const Text = styled.p`
font-family: "Poppins", sans-serif;
`

const TextBlock2 = ({ img, caption=null, title=null, text="hello", btText=null, btRef=null, btColor='green' }) => {
    return (
        <TextContainer>
            { img !== null && <ImageBlock 
                img={img} 
                caption={caption} 
                /> }
            { title !== null && <Title>{title}</Title> }
            { btText !== null && <Button 
                text={btText} 
                link={btRef} 
                color={btColor}
                /> }
            <Text>{text}</Text>
        </TextContainer>
    )
}

export default TextBlock2;