import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
    ABOUT,
    GET_STARTED,
    DOCS,
    CONTACT,
    MEDIUM,
    GITHUB,
    TELEGRAM_2,
    DISCORD,
    ENTERPRISE,
    SERVICES
  } from "../../links";

const Item = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  white-space: nowrap;
  
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: "";
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
    padding: 10px 0;
    font-size: 1.0rem;
    z-index: 6;
  }
`

const FooterGroup = styled.div`
padding: 20px;
margin-left: 20px;
flex-direction: row;

@media only screen and (max-width: 675px) {
  padding: 10px;
  margin-left: 0px;
  width: fit-content;
}
`

const FooterGroupTitle = styled.h5`
font: 500 17px/28px "Poppins", sans-serif;
border-bottom: solid #ffffff 1px;
color: #ffffff;
margin-bottom: 0;
`

const FooterGroupList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
padding-top: 10px;

@media only screen and (max-width: 675px) {
  text-align: left;
}
`
const FooterGroupItem = styled.li`
font: 500 14px/16px "Poppins", sans-serif;
color: #ffffff;
margin-bottom: 8px;

:hover {
  text-decoration: none;
  color: #8f8f8f;
}
`

const footer_content = [
    {
        title: "Resources",
        items: [
            ['Get Stated', GET_STARTED],
            ['Docs', DOCS],
            ['Contribute', GITHUB],
            ['Enterprise', ENTERPRISE],
            ['Services', SERVICES],
        ],
    },
    {
        title: "Community",
        items: [
            ['GitHub', GITHUB],
            // ['YouTube', YOUTUBE],
            ['Discord', DISCORD],
            ['Telegram', TELEGRAM_2],
            ['Medium', MEDIUM]
        ],
    },
    {
        title: "About Us",
        items: [
            ['Our History', ABOUT],
            ['Contact Us', CONTACT],
        ],
    },
]

const FooterLinks = () => {
  return (
          <>
            {footer_content.map((group)=> (
            <FooterGroup>
              <FooterGroupTitle>
                {group.title}
              </FooterGroupTitle>
              <FooterGroupList>
                {group.items.map((item, index)=> (
                  <FooterGroupItem>
                    <Item to={item[1]} key={index}>{item[0]}</Item>
                  </FooterGroupItem>
                ))}
              </FooterGroupList>
            </FooterGroup>
            ))}
           </>
  )
}

export default FooterLinks