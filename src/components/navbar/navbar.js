import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NavbarLinks from "./navbar-links"
import Logo from "./logo"
import styled from 'styled-components'
import SocialNetwork from '../social-network';
import { GITHUB, GET_STARTED } from "../../links";
import Button from "../button"

const Navigation = styled.nav`
  min-height: 7vh;
  display: flex;
  background-color: #212121;
  position: relative;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;


  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  font: 500 14px/20px "Poppins", sans-serif;
  color: #efefef;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #efefef;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #efefef;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const TopRightContainer = styled.div`
display: flex;
justify-content: flex-end;

@media (max-width: 768px) {
  display: none;
}
`

const InnerContainer = styled.div`
height: 100vp;
margin: auto 20px;
align-items: flex-end;

@media (max-width: 768px) {
  display: none;
}
`

const snGit = <FontAwesomeIcon icon={faGithub} />;

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>

      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
      <TopRightContainer>
        <InnerContainer>
          <SocialNetwork link={GITHUB} icon={snGit}/>  
        </InnerContainer>
        <InnerContainer>
          <Button link={GET_STARTED} text='GET STARTED'/>
        </InnerContainer>
      </TopRightContainer>
    </Navigation>
  )
}

export default Navbar