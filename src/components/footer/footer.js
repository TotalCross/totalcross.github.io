import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components"
import FooterLinks from './footer-links'
import SocialNetworks from './social-networks';

const FooterContainer = styled.footer`
background-color: #212121;
color: #ffffff;
left: 0;
bottom: 0;
width: 100%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;

@media only screen and (max-width: 675px) {
    align-items: center;
    justify-content: center;
`

const FooterNav = styled.div`
display: flex;
flex-wrap: wrap;


@media only screen and (max-width: 675px) {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const FooterLogo = styled.div`
padding: 40px;
text-align: right;
`

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      logo: file(name: { eq: "logo-totalcross" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(width: 180, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
    return (
        <FooterContainer>
            <FooterNav>
                <FooterLinks />
            </FooterNav>
            <FooterLogo>
                <Img fixed={data.logo.childImageSharp.fixed} alt="TotalCross logo" />
                <SocialNetworks />
            </FooterLogo>
        </FooterContainer>
    )
}

export default Footer;