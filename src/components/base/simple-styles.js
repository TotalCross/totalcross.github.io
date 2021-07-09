import React from "react";
import styled from "styled-components";

//ELEMENTS

export const Title = styled.h1`
font: var(--font-title);
color: ${props => props.theme === "dark" ? "var(--color-light)" : "var(--color-primary)"};
text-align: center;
margin: 0;

@media only screen and (max-width: 1000px) {
    padding-top: auto;
    margin-bottom: 0px;
}

@media only screen and (max-width: 600px) {
    margin: 0;
    width: 90%;
}
`

export const Subtitle = styled.h3`
font: var(--font-subtitle);
color: ${props => props.theme === "dark" ? "var(--color-light)" : "var(--color-dark)"};
text-align: center;
margin: 0 auto;

width: 100%;

@media only screen and (max-width: 1000px) {
    margin-bottom: 0px;
}

@media only screen and (max-width: 600px) {
    width: 90%;
    margin: 0 auto 20px;
}
`

export const Text = styled.p`
font: var(--font-text);
color: ${props => props.theme === "dark" ? "var(--color-light)" : "var(--color-dark)"};
margin: 0 0 15px;;

@media only screen and (max-width: 600px) {
    width: 90%;
}

@media only screen and (min-width: 1400px) {
    font: var(--font-text-big);
}
`

//STRUCTURAL

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${props => props.theme === "dark" && 
        "background: var(--color-dark);"+
        "* {color: white}"
    }

    background-position: center;
    background-size: cover;

    padding: 120px 40px;
`