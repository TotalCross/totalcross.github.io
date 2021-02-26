import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroCenter from '../components/hero-center'
import Banner2C from '../components/banner-2columns'
import TextBlock from '../components/text-block'
import TextBlock2 from '../components/text-block2'
import ImageBlock from '../components/image-block'
import GetStartedBanner from "../components/repeat-banners/get-started-banner"
import GetStartedBannerSimple from '../components/repeat-banners/get-started-banner-simple'
import GoToGitHub from '../components/repeat-banners/go-to-github'
import Banner1C from '../components/banner-1column'

const RowContainer = styled.div`
display: flex;
flex-direction: row;
align-content: center;
@media only screen and (max-width: 600px) {
  flex-wrap: wrap;
}
`

const InnerContainer = styled.div`
margin: 20px;
`
const WhyTotalCross = () => {
    const data = useStaticQuery(graphql`
    query {
      bg: file(name: { eq: "bg_wavesdark" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      info: file(name: { eq: "whytotalcross_info" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 636) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      info2: file(name: { eq: "whytotalcross_info2" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 636) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      info3: file(name: { eq: "whytotalcross_info3" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 636) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      corona: file(name: { eq: "whytotalcross_corona" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 836) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ide: file(name: { eq: "whytotalcross_ide" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lang: file(name: { eq: "whytotalcross_languages" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fast: file(name: { eq: "whytotalcross_fast" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
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
            title="Why TotalCross"
            tagline="Three important points that make the difference when programming"
            bgImg={data.bg.childImageSharp.fluid}/>
            <Banner2C 
            title="Low footprint application: be light!"
            subtitle="Keeping your application's footprint as low as possible is important to ensure a better performance. That's what we do: TotalCross runtime is currently at 5MB to bring mobile grade user experience even for low-end MPUs."
            spaces={[
                <ImageBlock 
                img={data.info.childImageSharp.fluid}
                fixed={false}
                />,
                <TextBlock
                title="TotalCross Bytecode"
                text={[
                  "Even coding with Java/Kotlin, TC SDK uses anything of these languages on the device. The Java bytecode is converted to optimized TotalCross bytecode. It has been created based on performance statistical researches to identify the operations that are frequently used and have more impact in performance. These operations are compressed in order to reduce the assembly of instructions and to provide low footprint."
                ]} />
            ]}
            />
            <Banner2C 
            spaces={[
                <TextBlock
                title="TotalCross Virtual Machine"
                text={["Instead of Jaca Virtual Machine (JVM), which is stack based, TotalCross Virtual Machine (TCVM) is register based. In a few words, it means a simple addition operation, which loads 4 instructions in JVM, it requires loading only one instruction in TCVM, ensuring high performance."]} />,
                <ImageBlock 
                img={data.info2.childImageSharp.fluid}
                fixed={false}
                />
            ]}
            />
            <Banner2C 
            spaces={[
                <ImageBlock 
                img={data.info3.childImageSharp.fluid}
                fixed={false}
                />,
                <TextBlock
                title="Running higher even with low resources"
                text={["Make the most of your hardware resources: TotalCross' architecture delivers an amazing user experience over the interface, with high language programming, thanks to low footprint guaranteed. Be prepared to see your application running on any device."]} />
            ]}
            />
            <GetStartedBannerSimple />
            <Banner2C 
            title="Easy to Use: raise your productivity!"
            spaces={[
              <ImageBlock 
              img={data.corona.childImageSharp.fluid}
              fixed={false}/>,
              <TextBlock
              text={["Keeping your application's footprint as low as possible is important to ensure a better performance. That's what we do; TotalCross runtime is currently at 5MB to bring mobile grade experience even for low-end MPUs.",
              "The Corona Chart App was coded with TotalCross. RapidAPI was used to fetch data and send it to the chart. The chart itself was coded in less than 150 lines while the whole app used 4 classes adding up to less than 600 lines of code in total."]}
              btText="Check the code"
              btRef="https://github.com/TotalCross/corona-chart-app"
              btColor="black" />
            ]}/>
            <GoToGitHub />
            <Banner1C 
            space={<RowContainer>
              <InnerContainer>

            <TextBlock2 
            img={data.ide.childImageSharp.fixed}
            title="On your Favorite IDE"
            text="TotalCross SDK is compatible with any integrated development environment (IDE) that supports Java, like VSCode, NetBeans, Eclipse, and IntekkiJ."/>
            </InnerContainer>
            <InnerContainer>

            <TextBlock2 
            img={data.lang.childImageSharp.fixed}
            title="High level Languages"
            text="TotalCross uses NanoJava, a leaner version of Java, or more precisely a subset of the language with 72% less classes than full Java. You can also use a subset of Kotlin with TotalCross."/>
            </InnerContainer>
            <InnerContainer>

            <TextBlock2
            img={data.fast.childImageSharp.fixed}
            title="Fast to Learn"
            text="Follow our documentation and you will be able to start developing your app just in a few hours. TotalCross developers all agree that TotalCross is very easy to learn."/>
            </InnerContainer>

            </RowContainer>}
            />
            <GetStartedBanner />
        </Layout>

    )
}

export default WhyTotalCross