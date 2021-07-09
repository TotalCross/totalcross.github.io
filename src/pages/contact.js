import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/organizational/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"

const Contact = () =>  {
  const data = useStaticQuery(graphql`
    query {
      bg: file(name: { eq: "bg_wavesdark" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO
        title="TotalCross · Contact Us"
        description="Let’s talk! Please, tell us how we can help you. We are happy to be useful."
      />
      <BackgroundImage Tag="section" fluid={data.bg.childImageSharp.fluid}>
        <ContactForm />
      </BackgroundImage>
    </Layout>
  );
}

export default Contact
