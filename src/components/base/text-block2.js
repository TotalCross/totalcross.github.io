import React from "react"
import styled from "styled-components"
import Button from "./button"
import ImageBlock from "./image-block"

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;
font-family: "Poppins", sans-serif;
`
const BtContainer = styled.div`
display: flex;
text-align: center;
`
const Title = styled.h3`
font-weight: 800;
font-size: 24px;
color: var(--color-dark);
margin-top: 1rem;
margin-bottom: 0rem;

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
            { btText !== null && <BtContainer><Button 
                text={btText} 
                link={btRef} 
                color={btColor}
                /></BtContainer> }
                
            <Text>{text}</Text>
        </TextContainer>
    )
}

export default TextBlock2;