import React from "react"
import styled from "styled-components"
import Button from "./button"
import ImageBlock from "./image-block"

import * as Simple from "./simple-styles"

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
text-align: left;
`

export const BtContainer = styled.div`
display: flex;
text-align: center;

margin-top: 20px;
`

export const Title = styled(Simple.Title)`
text-align: start;
margin-bottom: 0px;
`

export const ImageBlockOnText = styled(ImageBlock)`

`

export const Text = styled(Simple.Text)`
font-family: "Poppins", sans-serif;
`

const TextBlock = ({className, img=null, caption=null, title=null, text=null, btText=null, btRef=null, btColor='green', theme}) => {
    return (
        <TextContainer className={className}>
            { title !== null && <Title theme={theme}>{title}</Title>}
            { img !== null && <ImageBlockOnText 
                img={img} 
                caption={caption} 
                /> }
            { text !== null && text.map(paragraph => (
                <Text theme={theme}>{paragraph}</Text>
            ))}
            { btText !== null && <BtContainer><Button text={btText} link={btRef} color={btColor}/> </BtContainer>}
        </TextContainer>
    )
}

export default TextBlock;