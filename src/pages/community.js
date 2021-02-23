import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HeroCenter from "../components/hero-center";
import Banner1C from "../components/banner-1column";
import SquareCard2 from '../components/square-card2';
import { faCog, faCode, faFileAlt, faVideo, faPen, faComments } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faTelegram,
  faDiscord,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { 
  GITHUB, 
  GITHUB_ISSUES, 
  GITHUB_DOCS, 
  FORUM,
  TWITTER,
  TELEGRAM,
  DISCORD,
  LINKEDIN,
  ARTICLES,
  TUTORIALSPAGE,
  MEDIUM,
  YOUTUBE
} from "../links";


const Community= ({ location=null }) =>  {
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
  const COG = <FontAwesomeIcon icon={faCog} />;
  const CODE = <FontAwesomeIcon icon={faCode} />;
  const FILE = <FontAwesomeIcon icon={faFileAlt} />;
  const ICON_TWITTER = <FontAwesomeIcon icon={faTwitter} />;
  const ICON_TELEGRAM = <FontAwesomeIcon icon={faTelegram} />;
  const ICON_DISCORD = <FontAwesomeIcon icon={faDiscord} />;
  const ICON_LINKEDIN = <FontAwesomeIcon icon={faLinkedin} />;
  const ICON_MEDIUM = <FontAwesomeIcon icon={faMedium} />;
  const ICON_FORUM = <FontAwesomeIcon icon={faComments} />;
  const ICON_ARTICLES = <FontAwesomeIcon icon={faPen} />;
  const ICON_VIDEO = <FontAwesomeIcon icon={faVideo} />;
  return (
    <Layout location={location} >
      <SEO
        title="TotalCross · Enjoy Our Community"
        description="Join the TotalCross Community. We invite you to start a connection with us and with all developers using our tool."
      ></SEO>
    <HeroCenter 
    bgImg={data.bg.childImageSharp.fluid}
    title='Join the TotalCross Community'
    />
    <Banner1C
    title='Become a TotalCross Contributor'
    space={<>
        <SquareCard2 
    text="Code"
    icon={CODE}
    url={GITHUB}
    />
    <SquareCard2 
    text="Report an Issue"
    icon={COG}
    url={GITHUB_ISSUES}
    />
    <SquareCard2 
    text="Docs"
    icon={FILE}
    url={GITHUB_DOCS}
    />
    </>}
    />
    <Banner1C
    title='Join The Conversation'
    space={<>
    <SquareCard2 
    text="Forum"
    icon={ICON_FORUM}
    url={FORUM}
    />
    <SquareCard2 
    text="Twitter"
    icon={ICON_TWITTER}
    url={TWITTER}
    />
    <SquareCard2 
    text="Telegram"
    icon={ICON_TELEGRAM}
    url={TELEGRAM}
    />
    <SquareCard2 
    text="Dicord"
    icon={ICON_DISCORD}
    url={DISCORD}
    />
    <SquareCard2 
    text="ARTICLES"
    icon={ICON_ARTICLES}
    route={MEDIUM}
    />
    <SquareCard2 
    text="Video Tutorials"
    icon={ICON_VIDEO}
    route={YOUTUBE}
    />
    <SquareCard2 
    text="LinkedIn"
    icon={ICON_LINKEDIN}
    url={LINKEDIN}
    />
    </>}
    />
    </Layout>
  );
}

export default Community;