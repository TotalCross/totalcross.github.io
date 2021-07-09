import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import ImageBlock from '../base/image-block'
import Banner2C from "../organizational/banner-2columns"
import TextBlock from '../base/text-block'
import { GET_STARTED } from '../../links'

import * as Simple from "../base/simple-styles"
import * as TextBlockClass from "../base/text-block"
import * as ImageBlockClass from "../base/image-block"
import * as ButtonClass from "../base/button"
import * as Banner2CClass from '../organizational/banner-2columns'

const GetStartedSection = styled(Banner2C)`
  ${Banner2CClass.Container} {
    gap: 0;
    padding-bottom: 30px;

    @media only screen and (min-width: 1400px) {
      padding-bottom: 60px;
    }
  }

  ${ImageBlockClass.ImageContainer} {

    @media only screen and (min-width: 600px) {
      width: 70%;
      margin: 0 auto;
    }

  }

  ${TextBlockClass.TextContainer} {
    justify-content: center;

    ${TextBlockClass.Title} {
      font-size: 2.2rem;
    }
  }

  ${ButtonClass.GreenButton} {
    width: 50%;
  }
`

const GetStartedBanner = () => {

  const data = useStaticQuery(graphql`
  query {
    gsbanner: file(name: { eq: "home_gsbanner" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 820) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

  return (
      <GetStartedSection 
        spaces={[
          <ImageBlock 
            img={data.gsbanner.childImageSharp.fluid}
            fixed={false}
          />,
          <TextBlock 
            theme='dark'
            title='Ready to get started?'
            text={['Build your own GUI with TotalCross!']}
            btText='Get Started'
            btRef={GET_STARTED}
            btColor="green"
          />
        ]}
        theme='dark'
      /> 
  )
}

export default GetStartedBanner