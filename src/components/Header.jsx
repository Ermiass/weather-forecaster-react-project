import React from 'react';
import styled from 'styled-components';
import { WiCloudRefresh } from 'react-icons/wi';

const HeaderContainer = styled.div`
display: flex;
justify-content:center;
// margin-bottom: 2rem;
`;

const Header = ({ refreshSearch }) => {
  return (

    <HeaderContainer>
      <WiCloudRefresh size="3rem" color="rgb(116, 116, 244)" onClick={refreshSearch} />
    </HeaderContainer>
  );
};

export default Header;
