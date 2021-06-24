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
const BtContainer = styled.div`
display: flex;
text-align: center;
`
const Title = styled.h3`
color: #161616;
margin-top: 1rem;
margin-bottom: 0.5rem;
`
const Text = styled.p`
font-family: "Poppins", sans-serif;
font-size: 0.9rem;
margin-bottom: 0.5rem;
`
const TinyText = styled(Text)`
font-size: 0.7rem;
`

const TextBlock2Sample = ({ img, caption=null, title=null, text="hello", btText=null, btRef=null, btColor='green', btIcon }) => {
    return (
        <TextContainer>
            { img !== null && <ImageBlock hasBorder="true" hasShadow="true" width="100%"
                img={img} 
                /> }
            { title !== null && <Title>{title}</Title> }
            <Text>{text}</Text>
            <TinyText>{caption}</TinyText>
            { btText !== null && <BtContainer><Button margin="false"
                text={btText} 
                link={btRef} 
                color={btColor}
                icon={btIcon}
                /></BtContainer> }
                
            
        </TextContainer>
    )
}

export default TextBlock2Sample;