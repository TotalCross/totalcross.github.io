import React from 'react'
import styled from 'styled-components'
import BackgroundImage from "gatsby-background-image";
import * as Simple from '../base/simple-styles'

//Structural Style

const Header = styled.header`
    margin-bottom: 50px;
`

const OneColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

    //Se não der certo, mudar para "TwoColumns" e fazer com grid
const MultiColumns = styled(OneColumn)`
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    width: 60%;

    font: var(--font-text);

    & > * {
        flex: 1;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`

//Element Style


//Component
export function Banner (props) {
    return (
        <BackgroundImage
            Tag="section"
            fluid={props.background}
        >
            <Simple.Container className={props.className} theme={props.theme}>
                <Header>
                    {props.title && <Simple.Title>{props.title}</Simple.Title>}
                    {props.subtitle && <Simple.Subtitle>{props.subtitle}</Simple.Subtitle>}
                </Header>
                {props.multiColumn ? 
                    <MultiColumns>{props.children}</MultiColumns> 
                        : 
                    <OneColumn>{props.children}</OneColumn>
                }
            </Simple.Container>
        </BackgroundImage>
    );
}