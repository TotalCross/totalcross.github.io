import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CHANGE_JAVA_MAVEN_PLUGIN, AZUL_TERMS, INSTALL_JAVA11, INSTALL_VSCODE, INSTALL_MAVEN, TC_VSCODE_PLUGIN, TC_HELLO_REPO, GT_ECLIPSE_VIDEO, GT_ECLIPSE_ARTICLE, GT_INTELLIJ_VIDEO, GT_INTELLIJ_ARTICLE, FIRST_EMBEDDED_PROJECT, GT_VSCODE_ARTICLE, TELEGRAM, DISCORD } from "../links"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"


import LedGIF from "../imgs/led-totalcross.gif"

const Icon = styled(FontAwesomeIcon)`
color: rgb(164, 214, 79);
font-size: 30px;
`
const Container = styled.div`
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: center;
width: 100vw;
font-family: "Poppins", sans-serif;
`

const Downloads = styled(Container)`
flex-direction: row;
align-items: start;

@media only screen and (max-width: 675px) {
    flex-wrap: wrap;
}
`

const Download = styled.div`
display: flex;
flex-direction: column;
color: #efefef;
align-items: start;
justify-content: right;
width: 30vw;
text-align: left;
background-color: rgb(42, 42, 42);
border-radius: 30px;
margin: 20px;
box-shadow: 0px 3px 15px #0101013b;

  h3 {
    color: #efefef;
  }

@media only screen and (max-width: 675px) {
    width: 60vw;
}
`

const DownloadText = styled.div`
background-color: rgb(17, 17, 17);
padding: 15px;
border-radius: 0 0 30px 30px;
`

const PageTitle = styled.h1`
color: #efefef;
font: 800 46px/60px "Poppins", sans-serif;
padding-top: 120px;
padding-bottom: 50px;
`

const PageSubtitle = styled.h2`
color: #efefef;
font: 700 30px/40px "Poppins", sans-serif;
padding-top: 120px;
padding-bottom: 50px;
`

const PageSubtitleH3 = styled.h3`
color: #efefef;
font: 700 30px/40px "Poppins", sans-serif;
min-width: 80px;
width: 100%;
margin: 15px 0;
height: 100%;
text-align: center;
`

const Dependencies = styled.div`
display: flex;
justify-content: center;
align-items: start;
width: 60vw;
margin-bottom: 100px;

@media only screen and (max-width: 675px) {
    flex-wrap: wrap;
}
`
const Dependency = styled.div`
display: flex;
flex: 1 1 0px;
flex-direction: column;
align-items: start;
padding: 5px;
align-items: left;
padding: 0 10px;

@media only screen and (max-width: 675px) {
    padding: 5px 0;
}`

const Number = styled.div `
color: #efefef;
font: 800 46px/60px "Poppins", sans-serif;
`

const Text = styled.div`
color: #efefef;
max-width: 320px;
text-align: left;
  a {
    color: rgb(164, 214, 79);
  }

@media only screen and (max-width: 675px) {
    padding: 0 0 0 10px;
    min-width: 265px;
    max-width: 265px;
}
`

const GSLink = styled.a`
color: rgb(164, 214, 79);
`

const LEDImage = styled.img`
border-radius: 30px;
`

const LEDGif = styled.div`
margin-left: auto;
margin-right: auto;
`

const HelloWorld = styled.div`
color: #efefef;
width: 60vw;
text-align: left;
margin-bottom: 50px;

@media only screen and (max-width: 675px) {
    width: 80vw;
}
`

const HelloWorldInner = styled.div`
display: flex;
flex-direction: column;

@media only screen and (max-width: 675px) {
    flex-direction: column;
  }
`

const HelloWorldInnerInstructions = styled.div`
flex: 1 1 0px;
padding-right: 30px;

  p span {
      background-color: #333333;
      font-family: monospace;
      padding: 5px;
      color: #efefef;
  }
`

const HelloWorldInnerTips = styled.div`
flex: 1 1 0px;
margin: 50px 0;
border-radius: 30px;
box-shadow: 0px 3px 15px #0101013b;
display: flex;
`

const HelloWorldInnerTips3 = styled.div`
margin: 0 auto;
border-radius: 30px;
box-shadow: 0px 3px 15px #0101013b;
display: flex;
`

const TipsContainer = styled.div`
min-width: 78px;
background-color: rgb(17, 17, 17);
text-align: center;
padding-top: 32px;
border-radius: 30px 0 0 30px;
`
const TipsText = styled.div`
background-color: rgb(42, 42, 42);
padding: 20px;
border-radius: 0 30px 30px 0;
  p ul li span {
    background-color: #333333;
    font-family: monospace;
    padding: 5px;
    color: #efefef;
  }
  p ul {
      list-style: none;
    }
  p ul li::before {
      content: "\2022";
      color: rgb(164, 214, 79);
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  p ul li {
      padding-top: 20px;
    }
`

const TipsList = styled.ul`
list-style: none;
`

const TipsSpan = styled.span`
background-color: #333333;
font-family: monospace;
padding: 5px;
color: #efefef;
`

const tips = <Icon icon={faLightbulb} />;

const GetStarted = ({ location=null }) =>  {
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
    <Layout location={location}>
      <SEO
        title="How to get started with TotalCross"
        description="Get started with TotalCross in a few wasy steps."
      ></SEO>
      <BackgroundImage Tag="section" fluid={data.bg.childImageSharp.fluid}>
        <Container>
          <PageTitle>Get Started With TotalCross</PageTitle>
          <Dependencies>
            <Dependency>
              <Number>1.</Number>
              <Text>
                You need an IDE (we recommend <GSLink target="_blank" rel="noopener noreferrer" href={INSTALL_VSCODE}>VSCode</GSLink>, but any will do)
              </Text>
            </Dependency>
            <Dependency>
              <Number>2.</Number>
              <Text>
                You need <GSLink target="_blank" rel="noopener noreferrer" href={INSTALL_JAVA11}>Java</GSLink> (VSCode: Java11, any other IDE: Java8)
              </Text>
            </Dependency>
            <Dependency>
              <Number>3.</Number>
              <Text>
                  You need <GSLink target="_blank" rel="noopener noreferrer" href={INSTALL_MAVEN}>Maven</GSLink>
                </Text>
            </Dependency>
            <Dependency>
              <Number>4.</Number>
              <Text>
                Download TotalCross and start coding!
              </Text>
            </Dependency>
          </Dependencies>
          <HelloWorld>
            <HelloWorldInnerTips>
                <TipsContainer>{tips}</TipsContainer>
                <TipsText>
                <p>
                On versions 2.0.0 or above from totalcross-maven-plugin you need to agree to the <GSLink target="_blank" rel="noopener noreferrer" href={AZUL_TERMS}>Terms of Use from Azul</GSLink>. Alternatively, you can change the jdk used to any Java version you prefer to use. How to do it is described <GSLink target="_blank" rel="noopener noreferrer" href={CHANGE_JAVA_MAVEN_PLUGIN}>
                   here
                  </GSLink>
                  .</p>
                </TipsText>
            </HelloWorldInnerTips>
            </HelloWorld>
          <PageSubtitle>Download the TotalCross SDK</PageSubtitle>
          <Downloads>
            <Download>
              <PageSubtitleH3>For VSCode</PageSubtitleH3>
              <DownloadText>
                <p>
                  Make sure your VSCode is updated and download the <GSLink target="_blank" rel="noopener noreferrer" href={TC_VSCODE_PLUGIN}>TotalCross
                  VSCode plugin</GSLink>.
                </p>{" "}
                <p>
                  It includes the TotalCross SDK and sets up your project folder
                  structure so you can jump in the coding part straight away.
                </p>
                <p>Need help? Check <GSLink target="_blank" rel="noopener noreferrer" href={GT_VSCODE_ARTICLE}>this article</GSLink>.</p>
              </DownloadText>
            </Download>
            <Download>
              <PageSubtitleH3>For any other IDE</PageSubtitleH3>
              <DownloadText>
                <p>
                  Download <GSLink target="_blank" rel="noopener noreferrer" href={TC_HELLO_REPO}>this repository</GSLink> and follow the instructions on its
                  README file.
                </p>
                <p>
                  The process is a bit more involved, and that's why we
                  recommend using VSCode with our plugin. But you can definitely
                  do it!
                </p>
                <p>
                  Need help? Check <GSLink target="_blank" rel="noopener noreferrer" href={GT_INTELLIJ_VIDEO}>this video</GSLink> or <GSLink target="_blank" rel="noopener noreferrer" href={GT_INTELLIJ_ARTICLE}>this article</GSLink> for IntelliJ, <GSLink target="_blank" rel="noopener noreferrer" href={GT_ECLIPSE_VIDEO}>this video</GSLink> or <GSLink target="_blank" rel="noopener noreferrer" href={GT_ECLIPSE_ARTICLE}>this article</GSLink> for
                  Eclipse.
                </p>
              </DownloadText>
            </Download>
          </Downloads>
          <PageSubtitle>Hello World with TotalCross</PageSubtitle>
          <HelloWorld>
            <div>
              <h3>For VSCode</h3>
            </div>
            <HelloWorldInner>
              <HelloWorldInnerInstructions>
                <p>
                  Step 1 - Create a new TotalCross project called Hello World.
                </p>
                <p>
                  How? From the VSCode Command Palette (CTRL + Shift + P on
                  Windows, ⇧⌘P on Mac),{" "}
                  
                    type <strong>TotalCross</strong> and select <strong>TotalCross: Create new Project
                  </strong>
                  .
                </p>
                <p>Step 2 - A new window will open with your project.</p>
                <p>
                  Right click the <strong>RunHelloWorldApplication.java</strong> file inside src/main/com/totalcross and choose <strong>Run</strong>. The TotalCross
                  simulator will open with your brand new application.
                </p>
              </HelloWorldInnerInstructions>
              <HelloWorldInnerTips>
                <TipsContainer>{tips}</TipsContainer>
                <TipsText>
                  <p>
                    Tip - To fill in the prompted questions:
                    <TipsList>
                      <li>
                        GroupId is the domain of your company backward as in{" "}
                        <TipsSpan>org.wikipedia</TipsSpan> for{" "}
                        <TipsSpan>wikipedia.org</TipsSpan>. Feel free to leave it as{" "}
                        <TipsSpan>com.totalcross</TipsSpan> for now.
                      </li>
                      <li>
                        ArtifactId is the name of your application, for this
                        example type HelloWorld.
                      </li>
                      <li>
                        Select the latest version of TotalCross SDK and choose
                        whatever platform you intend to deploy your application.
                      </li>
                    </TipsList>
                  </p>
                </TipsText>
              </HelloWorldInnerTips>
            </HelloWorldInner>
            <div>
              <h3>For other IDEs</h3>
            </div>
            <HelloWorldInner>
              <HelloWorldInnerInstructions>
                <p>
                  Step 1 - Open your IDE and import the Hello World repository
                  you downloaded.
                </p>
                <p>
                  Step 2 - Inside src/main/java/com.totalcross, right-click the <strong>RunHelloWordApplication.java</strong> and choose <strong>Run</strong>. The TotalCross
                  simulator will open with your brand new application.
                </p>
                <p>
                  Need help? Check this video for <GSLink target="_blank" rel="noopener noreferrer" href={GT_INTELLIJ_VIDEO}>IntelliJ</GSLink> or this one for
                  <GSLink target="_blank" rel="noopener noreferrer" href={GT_ECLIPSE_VIDEO}> Eclipse</GSLink>.
                </p>
              </HelloWorldInnerInstructions>
            </HelloWorldInner>
          </HelloWorld>
          <PageSubtitle>Packaging and Deployment</PageSubtitle>
          <HelloWorld>
            <div>
              <h3>For VSCode</h3>
            </div>
            <HelloWorldInner>
              <HelloWorldInnerInstructions>
                <br/>
                <h4>Packaging:</h4>
                <p>
                  Step 1: Open VSCode Command Palette (CTRL+Shift+P on Windows,
                  ⇧⌘P on Mac) and search for <span>TotalCross: Package.</span>
                </p>
                <p>
                  Step 2: When the packaging process is finished the target
                  program will take place inside the folder
                  target/install/<em>~platform~</em>.
                </p>
                    <br/>
                    <br/>
                <h4>Deployment:</h4>
                <p>
                  Deployment is currently working only for linux arm programs.
                  This feature performs the implementation and execution of the
                  platform via ssh.
                </p>
                <p>
                  Step 1: Open VSCode Command Palette (CTRL + Shift + P on
                  Windows, ⇧⌘P on Mac) and search for TotalCross: Deploy&Run. If
                  you just want to deploy, choose the option TotalCross: Deploy.
                </p>
                <p>Step 2: Fill in the device information.</p>
                <p>
                  Step 3: See the result on a display connected to your device
                  or with a VNC client.
                </p>
                <br/>
                <br/>
              </HelloWorldInnerInstructions>
            </HelloWorldInner>
            <div>
              <h3>For other IDEs</h3>
            </div>
            <HelloWorldInner>
              <HelloWorldInnerInstructions>
                <p>
                  Packaging and deploying in other IDEs is not an autamatic
                  process.
                </p>
                <p>
                  Please check <GSLink target="_blank" rel="noopener noreferrer" href={GT_INTELLIJ_ARTICLE}>this article</GSLink> if you use IntelliJ or <GSLink target="_blank" rel="noopener noreferrer" href={GT_ECLIPSE_ARTICLE}>this article </GSLink>
                  if you use Eclipse. If you use other IDEs and these articles
                  are not helpfull, please drop us a line in <GSLink target="_blank" rel="noopener noreferrer" href={TELEGRAM}>our Telegram
                  Community</GSLink> or <GSLink target="_blank" rel="noopener noreferrer" href={DISCORD}>our Discord channel</GSLink>.
                </p>
              </HelloWorldInnerInstructions>
            </HelloWorldInner>
            <PageSubtitle>
              First embedded project with TotalCross
            </PageSubtitle>
            <HelloWorld>
              <HelloWorldInner>
                <p>
                  Follow <GSLink target="_blank" rel="noopener noreferrer" href={FIRST_EMBEDDED_PROJECT}>this step by step tutorial</GSLink> on how to build your first
                  embedded application using TotalCross.
                </p>
                <LEDGif>
                  <LEDImage
                    src={LedGIF}
                    alt="Raspberry Pi 3 with a led and GUI application"
                  />
                </LEDGif >
              </HelloWorldInner>
            </HelloWorld>
            <HelloWorldInnerTips>
                <HelloWorldInnerTips3> 
                    <TipsContainer>{tips}</TipsContainer>
                    <TipsText>
                        <p>
                        Got stuck or need any help? Join <GSLink target="_blank" rel="noopener noreferrer" href={TELEGRAM}>our Telegram
                        Community</GSLink> or <GSLink target="_blank" rel="noopener noreferrer" href={DISCORD}>our Discord channel</GSLink>.
                        </p>
                    </TipsText>
                </HelloWorldInnerTips3>
            </HelloWorldInnerTips>  
          </HelloWorld>
            
        </Container>
      </BackgroundImage>
    </Layout>
  );
};

export default GetStarted;
