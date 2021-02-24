import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSide from "../components/hero-side"
import Banner1C from "../components/banner-1column"
import ImageBlock from "../components/image-block"
import Banner2C from '../components/banner-2columns'
import TextBlock2 from '../components/text-block2'
import TextBlock from '../components/text-block'
import GetStartedBanner from "../components/repeat-banners/get-started-banner"
import { GET_STARTED, SAMPLES } from '../links'

const TCFeaturesContainer = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
`
const FeatureText = styled.div`
display: flex;
width: 30%;
margin: 1% 1%;
@media (max-width: 768px) {
  width: 100%;
}
`
const Index = () => {
  const data = useStaticQuery(graphql`
  query {
    bg: file(name: { eq: "bghome_sitetc" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bg2: file(name: { eq: "bg_wavesdark" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rasp: file(name: { eq: "rasp_01" }, extension: { eq: "png" }) {
      childImageSharp {
        fixed(width: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cross: file(name: { eq: "home_cross" }, extension: { eq: "png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    gui: file(name: { eq: "home_gui" }, extension: { eq: "png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    low: file(name: { eq: "home_lowfootprint" }, extension: { eq: "png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    open: file(name: { eq: "home_opensource" }, extension: { eq: "png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    board: file(name: { eq: "home_raspberry" }, extension: { eq: "png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    req: file(name: { eq: "home_requirements" }, extension: { eq: "png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    homeapp: file(name: { eq: "home_homeapp" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 820) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    printer: file(name: { eq: "home_printer" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 820) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    coffee: file(name: { eq: "home_coffee" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 820) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tecdet: file(name: { eq: "home_tecdet" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 820) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tecdetlogo: file(name: { eq: "home_tecdetlogo" }, extension: { eq: "png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    gsbanner: file(name: { eq: "home_gsbanner" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 820) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

  const TCFeatures = () => {
    const items = [
      {
        img:data.low.childImageSharp.fixed,
        title:'Low Footprint',
        text:'Less than 5MB of footprint, esuring high performance even when running in low-end devices.',
      },
      {
        img:data.gui.childImageSharp.fixed,
        title:'Fast to Use GUI Creator',
        text:'Basic knowledge of Java or Kotlin lets you build performing Apps for Android, Linux Arm, Windows and iOS.',
      },
      {
        img:data.cross.childImageSharp.fixed,
        title:'Cross-Platform',
        text:'Code once and run on, every platform. Responsive User Interfaces providing same behaviour and usability.',
      },
      {
        img:data.req.childImageSharp.fixed,
        title:'Minimum Requirements',
        text:'256MB RAM, CPU Arm A7 528MHz and GPU.',
      },
      {
        img:data.open.childImageSharp.fixed,
        title:'Free & Open Source',
        text:'Hosted on GitHub and maintained by a community of contributors.',
      },
      {
        img:data.board.childImageSharp.fixed,
        title:'Supported Embedded Platforms',
        text:'Raspberry Pi 4, 3 and 2, Beaglebone Black, Toradex Colibri, Verdin and Apalis.',
      },
      
    ]
    return (
      <TCFeaturesContainer>
      {items.map((feature)=>(
        <FeatureText>
          <TextBlock2
        img={feature.img} 
        title={feature.title} 
        text={feature.text} 
        />
        </FeatureText>
      ))}
      </TCFeaturesContainer>
    )
  } 

  return (
    <Layout>
      <SEO 
      title="TotalCross · GUI Creator For Embedded, Mobile... Everything!"
      description='Build beautiful and modern Graphical User Interfaces for embedded, IoT, mobile and desktop. A cross-platform tool that lets you develop apps in Java.' 
      />
      <HeroSide 
      title="The fastest way to build GUI for embedded devices" 
      tagline="Open Source SDK providing a fast and easy way to build beautiful User Interfaces for Embedded, IoT, mobile, desktop, everything." 
      img={data.rasp.childImageSharp.fixed} 
      imgText="Embedded system with display showing a TotalCross GUI"
      bgImg={data.bg.childImageSharp.fluid}
      />
      <Banner1C 
        title='Simplify the development of User Interfaces on Embedded Devices'
        space={<TCFeatures />}/>
      <Banner2C
        title='What is TotalCross?'
        bgImg={data.bg2.childImageSharp.fluid}
        spaces={[
      <ImageBlock 
        img={data.homeapp.childImageSharp.fluid}
        fixed={false}
      />, 
      <TextBlock 
        text={['TotalCross is an open-source cross-platform SDK developed to make your life easier when creating mobile grade user experience to your embedded systems.', 
        'All while delivering native performance with a low footprint.']} 
        btText='Get Started' 
        btRef={GET_STARTED}
        btColor='white'
      />
      ]}/>
      <Banner2C
      title='Samples'
      subtitle='Wonderful User Interfaces for Embedded Devices'
      spaces={[
        <ImageBlock 
          img={data.coffee.childImageSharp.fluid}
          fixed={false}
          caption="Control the features of your machine and enjoy choosing your coffee as the way you like" 
          title="Coffee Machine" 
        />, 
        <ImageBlock 
          img={data.printer.childImageSharp.fluid}
          fixed={false}
          caption="Can a printer be smarter? Yes, of course. It’s time to build a good interface for a printer and make the process easier. Check the code and see it running on an embedded device." 
          title="Printer" 
        />
      ]}
      btText='Check our Samples'
      btRef={SAMPLES}
      btColor='black'/>
      <Banner2C 
      spaces={[
        <TextBlock 
        title='Built with TotalCross:'
        text={['Tecdet develops systems for traffic control and inspection for the Brazilian government.', 
        'They decided to rebuild their system for the Linux Arm architecture compatible with Toradex modules and chose TotalCross to develop their GUI.']}
        btText='Check our Cases'
        btRef='/doc'
        btColor='black'
        img={data.tecdetlogo.childImageSharp.fixed}
        />
      , 
        <ImageBlock 
        img={data.tecdet.childImageSharp.fluid}
        fixed={false}
        />
      ]}
      />
      <GetStartedBanner />
    </Layout>
  )
}

export default Index

