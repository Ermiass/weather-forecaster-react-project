import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const FooterWraper = styled.div`
font-family:;
  color:#36454f ;
  text-align: center;
  .footer{  &--dark-mode {
    background-color: #fefefe;
    color:  #333;}}

  
`;

const Footer = () => {
  return (

    <FooterWraper>
      <h4>Ermias © {new Date().getFullYear()}</h4>
    </FooterWraper>

  );
};

export default Footer;
