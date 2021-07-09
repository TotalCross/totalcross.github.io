import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faTelegram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  GITHUB,
  TWITTER,
  TELEGRAM,
  YOUTUBE,
  LINKEDIN,
} from "../../links";

import SocialNetwork from "../social-network";

const SNContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const snGit = <FontAwesomeIcon icon={faGithub} />;
const snTwt = <FontAwesomeIcon icon={faTwitter} />;
const snTel = <FontAwesomeIcon icon={faTelegram} />;
const snYou = <FontAwesomeIcon icon={faYoutube} />;
const snLin = <FontAwesomeIcon icon={faLinkedin} />;

const SocialNetworks = () => (
  <SNContainer>
    <SocialNetwork link={GITHUB} icon={snGit} />
    <SocialNetwork link={TWITTER} icon={snTwt} />
    <SocialNetwork link={TELEGRAM} icon={snTel} />
    <SocialNetwork link={YOUTUBE} icon={snYou} />
    <SocialNetwork link={LINKEDIN} icon={snLin} />
  </SNContainer>
);

export default SocialNetworks;
