import React from 'react'
import styled from 'styled-components'

const SocialIcon = styled.button`
    margin: 0 5px; 
    color: #ffffff;
    font-size: 25px;
    display: flex;
    justify-items: flex-end;

    :hover {
        color: #2aa75e;
        transform: scale(1.2);
    }

    @media (max-width: 768px) {
    display: none;
    }
`

const SocialNetwork = (props) => (
  <SocialIcon as="a" href={props.link} target="_blank" rel="noopener noreferrer">
      {props.icon}
  </SocialIcon>
);

export default SocialNetwork