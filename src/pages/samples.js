import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/organizational/layout"
import SEO from "../components/seo"
import HeroCenter from "../components/organizational/hero-center"
import Banner1C from "../components/organizational/banner-1column"
import Banner2C from "../components/organizational/banner-2columns"
import TextBlock2Sample from "../components/base/text-block2-sample"
import TextBlock from "../components/base/text-block"
import { GET_STARTED } from '../links'
import GetStartedBanner from "../components/repeat-banners/get-started-banner"

const SamplesContainer = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
`
const InnerSampleContainer = styled.div`
display: flex;
width: 25%;
margin: 1% 3%;
@media (max-width: 768px) {
  width: 100%;
}
`
const Samples = () => {

  const data = useStaticQuery(graphql`
  query {
    banner: file(name: { eq: "sample_banner" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bg3: file(name: { eq: "bg_waveslight" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    printer: file(name: { eq: "sample_printer" }, extension: { eq: "png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    medical: file(name: { eq: "sample_medicaldevice" }, extension: { eq: "png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    home: file(name: { eq: "sample_homeapp" }, extension: { eq: "png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dash: file(name: { eq: "sample_dashboard" }, extension: { eq: "png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    corona: file(name: { eq: "sample_coronachart" }, extension: { eq: "png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    break: file(name: { eq: "sample_breakoutgame" }, extension: { eq: "png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bad: file(name: { eq: "sample_badapple" }, extension: { eq: "png" }) {
      childImageSharp {
        fixed(width: 200) {
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

  const TCSamples = () => {
    const items = [
      {
        img:data.printer.childImageSharp.fixed,
        btText:'Printer',
        text: "Can a printer be smart? Yes, of course. With TotalCross you can build a good interface for a printer and improve its usability. Take a look at the code and see it running on an embedded device.",
        caption:'Design by: Deeploy.me'
      },
      {
        img:data.break.childImageSharp.fixed,
        caption: null,
        btText:'Breakout Game',
        text:'Are you a retro games enthusiast? Go back to the past with this recreation of the Breakout game, made with TotalCross. Play with our sample code on your embedded device.',
      },
      {
        img:data.corona.childImageSharp.fixed,
        caption: null,
        btText:'Corona Virus Chart App',
        text:"You can create a Graphical User Interface (GUI) using a public covid-19 dtabase. That's what we did. Check out our sample code to access the covid-19 data on an interactive chart that runs on your embedded device.",
      },
      {
        img:data.medical.childImageSharp.fixed,
        caption: null,
        btText:'Medical Device',
        text:'Transform the way you create GUI for your medical devices. Check out this sample made with TotalCross.',
      },
      {
        img:data.dash.childImageSharp.fixed,
        caption: null,
        btText:'Dashboard',
        text:'Enjoy the functionality of different components with this Dashboard sample. An app that includes many functions commonly used on embedded systems.',
      },
      {
        img:data.bad.childImageSharp.fixed,
        caption: null,
        btText:'Bad Apple',
        text: "Run the Bad Apple animation on your Raspberry Pi or other embedded device. This app isn't a video file, but it is drawn frame by frame on the screen.",
      },
      
    ]

    //Grid probably is the optimal way to refactor this
    return (
      <SamplesContainer>
      {items.map((sample)=>(
        <InnerSampleContainer>
          <TextBlock2Sample
          img={sample.img}
          caption={sample.caption} 
          text={sample.text} 
          btText={sample.btText}
          btRef={sample.btRef}
          btColor="black"
          btIcon="github"
          />
        </InnerSampleContainer>
      ))}
      </SamplesContainer>
    )
  } 

  return (
    <Layout>
      <SEO 
      title="TotalCross · GUI Creator For Embedded, Mobile... Everything!"
      description='Build beautiful and modern Graphical User Interfaces for embedded, IoT, mobile and desktop. A cross-platform tool that lets you develop apps in Java.' 
      />
      <HeroCenter 
      title='Samples with TotalCross'
      tagline='Here you can check some samples of embedded projects'
      bgImg={data.bg3.childImageSharp.fluid}
      />
      <Banner2C
        bgImg={data.banner.childImageSharp.fluid}
        spaces={[
      <TextBlock 
        text={["Let's build a smart home! Create a control app for your house using this sample application as start.", 
        'The user interface will let you control temperature, security, alarms, internet connection, calendar and other things.']} 
        btText='Get the code' 
        btRef={GET_STARTED}
      />,<></>
      ]}/>
      <Banner1C 
        title='Check more samples'
        subtitle='Access our samples repository on GitHub and discover more applications!'
        space={<TCSamples />}/>
      <GetStartedBanner />
    </Layout>
  )
}

export default Samples

