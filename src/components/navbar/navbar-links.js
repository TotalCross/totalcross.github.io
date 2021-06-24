import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { SAMPLES, COMMUNITY, DOCS, LICENSE, SERVICES, WHYTC, BLOG } from '../../links'

const NavItem = styled(Link)`
  text-decoration: none;
  color: #efefef;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #2aa75e;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #2aa75e;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    color: #212121;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to={WHYTC}>WHY TOTALCROSS</NavItem>
      <NavItem to={LICENSE}>LICENSING</NavItem>
      <NavItem to={DOCS}>DOCS</NavItem>
      <NavItem to={SAMPLES}>SAMPLE</NavItem>
      <NavItem to={COMMUNITY}>COMMUNITY</NavItem>
      <NavItem to={SERVICES}>SERVICES</NavItem>
      <NavItem to={BLOG}>BLOG</NavItem>
    </>
  )
}

export default NavbarLinks