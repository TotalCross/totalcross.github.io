import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components"
import Banner1C from "../components/banner-1column";
import TextBlock2 from '../components/text-block2';

import ImageBlock from '../components/image-block';

const Container = styled.div`
background-color: #efefef;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ValuesContainer = styled(Container)`
flex-direction: row;
@media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const ValuesInnerContainer = styled.div`
width: 33.33%;
height: 100%;
align-items: start;
@media only screen and (max-width: 600px) {
    width: 100%;
  }
`
const AboutUs = ({ location=null }) =>  {
  const data = useStaticQuery(graphql`
    query {
      bg: file(name: { eq: "bg_wavesdark" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      timeline: file(name: { eq: "aboutus_timeline" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 939) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      timelinemob: file(name: { eq: "aboutus_timeline_mobile" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 271) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mission: file(name: { eq: "aboutus_mission" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(width: 125, height: 104) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      vision: file(name: { eq: "aboutus_vision" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(width: 125, height: 104) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      values: file(name: { eq: "aboutus_values" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(width: 125, height: 104) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Layout location={location}>
      <SEO
        title="TotalCross · Our History"
        description="TotalCross is a global Startup helping developers and companies to create
        beautiful applications, as a free and open source tool."
      />
      <BackgroundImage Tag="section" fluid={data.bg.childImageSharp.fluid}>
        <Container>
            <Banner1C 
            title='Our History'
            space={<ImageBlock
                img={data.timeline.childImageSharp.fluid}
                fixed={false}
                caption="2007 TotalCross Lauch, 2017 Startup, 2019 TotalCross for Embedded, 2020 Open Source"
              />}
            />
            <Banner1C 
            space={<ValuesContainer>
                <ValuesInnerContainer>

            <TextBlock2
        img={data.mission.childImageSharp.fixed} 
        title='Mission' 
        text={['To be the software development tool most loved by Embedded Developers.']} 
        />
        </ValuesInnerContainer>
        <ValuesInnerContainer>

            <TextBlock2
        img={data.vision.childImageSharp.fixed} 
        title='Vision' 
        text={['Software development made fast and easy for every device on the planet.']} 
        />
        </ValuesInnerContainer>
            <ValuesInnerContainer>

            <TextBlock2
        img={data.values.childImageSharp.fixed} 
        title='Values' 
        text={['Ownership, Driven by Details and Developers First.']} 
        />
        </ValuesInnerContainer>
            </ValuesContainer>}
            />
        </Container>
      </BackgroundImage>
    </Layout>
  );
}

export default AboutUs;
