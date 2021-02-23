import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ImageBlock from '../image-block'
import Banner2C from '../banner-2columns'
import TextBlock from '../text-block'
import { GET_STARTED } from '../../links'

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
      <Banner2C 
      spaces={[
        <ImageBlock 
        img={data.gsbanner.childImageSharp.fluid}
        fixed={false}/>,
        <TextBlock 
        title='Ready to get started?'
        text={['Build your own GUI with TotalCross!']}
        btText='Get Started'
        btRef={GET_STARTED}
        btColor="white"
        />
      ]}
      theme='dark'
      /> 
  )
}

export default GetStartedBanner