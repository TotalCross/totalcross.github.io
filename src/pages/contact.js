import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/contact-form";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Contact = ({ location=null }) =>  {
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
    <Layout location={location}>
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

export default Contact;
