import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CONTACT, GET_STARTED } from '../links'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import Button from "../components/button"
import HeroCenter from "../components/hero-center"
import Banner2C from "../components/banner-2columns"
import TextBlock from "../components/text-block"
import Banner1C from "../components/banner-1column"
import ImageBlock from '../components/image-block'

const Icon = styled(FontAwesomeIcon)`
color: #2aa75e;
margin-right: 10px
`
const check = <Icon icon={faCheckCircle} />

const MainContainer = styled.div`
background-color: #efefef;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-items: center;
width: 100vw;
@media only screen and (max-width: 600px) {
  background-color: $bcg-sec;
  width: 100%;
}
`

const LicenseText = [
    "TotalCross is open source under LGPL v2.1. That means:", 
    "If you will use TotalCross for a personal project that will not be shared with anyone, you don't need to worry about licence demands.", 
    "If you will show your project to others, you just need to make it clear that you are using TotalCross, include TotalCross source code, and with that let people know that LGPL'd software is being used in your work. As long as you do that you are covered to give your work away or sell it.",
    "If you make any changes to TotalCross code you will need to send these changes back to TotalCross. If you did something really clever we'll definetelly consider adding it to a future version, so that more people can benefit from it."
]

const CommercialLicenseText = [
    "If complying with the requirements outlined above doesn't quite fit your needs, we also have a commercial licence.",
    "Contact us if you wish to know more about it."
]

const CardsContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`
const Card = styled.div`
background-color: #212121;
border-radius: 20px;
color: #ffffff;
padding: 10px;
margin: 20px 50px;
width: 456px;
box-shadow: 0px 3px 6px #16161691;
@media only screen and (max-width: 600px) {
  background-color: #212121;
  border-radius: 10px;
  color: #f2f2f2;
  padding: 10px;
  margin: 10px 10px 30px 10px;
  width: 80vw;
}
`
const CardTitle = styled.h3`
text-align: left;
padding-left: 10%;
padding-top: 33px;
font: 700 30px/40px "Poppins", sans-serif;
text-transform: uppercase;
text-align: left;
padding-left: 10%;

@media only screen and (max-width: 600px) {
    .card-title {
      padding-top: 40px;
      font-family: "Poppins";
      font-weight: 800;
      letter-spacing: 2px;
      font-size: 30px;
      text-transform: uppercase;
    }
}
`

const CardSubtitle = styled.h5`
text-align: left;
padding-left: 10%;
font: 500 14px/20px "Poppins", sans-serif;
font-weight: 300;
height: 20px;

@media only screen and (max-width: 600px) {
    .card-subtitle {
      font: 500 14px/20px "Poppins", sans-serif;
      font-weight: 300;
      font-style: italic;
      color: #6b5757;
      height: 20px;
    }
}
`

const CardList = styled.ul`
text-align: left;
padding-left: 10%;
font: 500 17px/28px "Poppins", sans-serif;
font-weight: 300;
padding-top: 34px;
padding-right: 36px;
padding-bottom: 50px;
list-style: none;

@media only screen and (max-width: 600px) {
    .card-list {
      font-family: "Roboto";
      font-weight: 100;
      text-align: left;
      padding-top: 20px;
      padding-right: 5%;
      padding-left: 10%;
      padding-bottom: 20px;
    }
}
`

const CardListItem = styled.li`
display: flex;
`

const BulletPoint = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 30px;
min-width: 30px;
height: 26px;
margin-right: 10px;
`

const BulletPointBackground = styled.div`
background-color: #f2f2f2;
width: 15px;
height: 15px;
position: absolute;
z-index: 1;
border-radius: 10px;
`

const BulletPointIcon = styled.div`
position: absolute;
z-index: 2;
margin-top: 1px;
margin-left: 9px;
`

const FreeLicenseCard = () => {
    const FreePlan = [
        {
          features: [
            "Unlimited Developers",
            "Unlimited Runtime",
            "Community Support",
            "Embedded Apps: Linux Arm, Android, WinCE",
            "Desktop Apps: Windows, Linux",
            "Mobile Apps: Android, iOS",
            "Documentation and Guidelines",
            "Video Tutorials",
            "Forum",
          ],
          title: "Free",
          license: "Under LGPL v2.1",
        },
      ];
    return(
        <CardsContainer>
            {FreePlan.map((plan) => (
              <Card>
                <CardTitle>{plan.title}</CardTitle>
                <CardSubtitle>{plan.license}</CardSubtitle>
                <CardList>
                  {plan.features.map((item) => (
                    <CardListItem>
                      <BulletPoint>
                        <BulletPointBackground></BulletPointBackground>
                        <BulletPointIcon>{check}</BulletPointIcon>
                      </BulletPoint>
                      {item}
                    </CardListItem>
                  ))}
                </CardList>
                <Button 
                    text="Get Started"
                    link={GET_STARTED}
                />
              </Card>
            ))}
          </CardsContainer>
    )
}

const Licensing = ({ location=null }) => {
  const data = useStaticQuery(graphql`
    query {
      lgpl: file(name: { eq: "licence" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 820) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout location={location} >
      <SEO
        title="TotalCross · Licenses"
        description="Understand what you get with TotalCross Free License under Open Source License LGPL v2.1 and what is included in the Commercial License."
      ></SEO>
      <MainContainer>
        <HeroCenter title="Our Licenses" />
        <Banner2C 
            spaces={[
            <TextBlock
            title="TotalCross is LGPL v2.1"
            text={LicenseText}
            />,
            <FreeLicenseCard />
            ]}
        />
        <Banner1C 
            space={
            <ImageBlock 
            img={data.lgpl.childImageSharp.fluid}
            fixed={false}  
        />}
        />
        <Banner1C 
            space={
            <TextBlock
            title="TotalCross also has a commercial licence"
            text={CommercialLicenseText}
            btText="Contact us"
            btRef={CONTACT}
            />}
        />
      </MainContainer>
    </Layout>
  );
}

export default Licensing;