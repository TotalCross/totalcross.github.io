import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroCenter from '../components/hero-center'
import Banner2C from '../components/banner-2columns'
import TextBlock from '../components/text-block'
import Banner1C from '../components/banner-1column'
import { CONTACT } from '../links'
import ImageBlock from '../components/image-block'

const Services = () => {
    const data = useStaticQuery(graphql`
    query {
      bg: file(name: { eq: "bg_wavesdark" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
    return (
        <Layout>
            <SEO title="TotalCross · GUI Creator For Embedded, Mobile... Everything!"
            description='Build beautiful and modern Graphical User Interfaces for embedded, IoT, mobile and desktop. A cross-platform tool that lets you develop apps in Java.'/>
            <HeroCenter 
            title="Our Services"
            titleColor="#efefef"
            tagline="Needing extra hands? You can count on us!"
            taglineColor="#efefef"
            bgImg={data.bg.childImageSharp.fluid}/>
            
            <Banner2C
              // subtitle="Keeping your application's footprint as low as possible is important to ensure a better performance. That's what we do: TotalCross runtime is currently at 5MB to bring mobile grade user experience even for low-end MPUs."
              theme='light'
              subContainerTopMargin="60px"
              spaces={[
                <ImageBlock
                  img={"Image Here"}
                  fixed={false}
                />, 
                <TextBlock
                  title='Support for TotalCross framework?'
                  text={["You can find a lot of content on TotalCross’s Community. But, if you prefer having a high level of support, our team can help you.",
                  "Our enterprise support is ready to solve any problem, demand and jobs you require. Please, contact us to discover more about it."
                  ]}
                  btText='I want this support'
                  btRef={CONTACT}
                  btColor="black"
                />
              ]}
            />
            <Banner2C
              theme='light'
              spaces={[
                <TextBlock
                  title='Do you want us to code your GUI?'
                  text={["As you know, coding GUI is really time consuming.. and our engineers are able to build it for you in a record time.",
                  "If you want to know more about this offer, send us a Request for a Quotation!"]}
                  btText="Request for Quotation"
                  btRef={CONTACT}
                  btColor="black"
                />,
                <ImageBlock
                  img={"Image Here"}
                  fixed={false}
                />
              ]}
            />
            <Banner2C
              theme='light'
              spaces={[
                <ImageBlock
                  img={"Image Here"}
                  fixed={false}
                />, 
                <TextBlock
                  title='Design the graphical user interface'
                  text={["If your need is to design the user interface of your application, we can also help you. The embedded systems market is requiring an authentic interface and the users deserve to have an awesome experience.", 
                  'Our designers bring a "mobile like" UI/UX for your embedded project.']}
                  btText="Request for Quotation"
                  btRef={CONTACT}
                  btColor="black"
                />
              ]}
            />

            {/* <GoToGitHub /> */}
            <Banner1C 
            title='Needing another kind of service?'
            titleColor="#212121"
            titleBottomMargin="20px"
            subtitle="If you haven't found what you are looking for, let us know. We'll be glad to help you or refer you to one of our partners."
            subtitleWidth="36%"
            theme='light'
            btText='I want another support '
            btRef={CONTACT}
            btColor="black"
            />
            
            {/* <GetStartedBanner /> */}
        </Layout>

    )
}

export default Services