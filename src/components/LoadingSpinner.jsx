import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(180deg);
        /* transform:rotate(360deg); */
    }
`;

const StyledSpinner = styled.div`
    img {
    margin-top: 7rem;
    max-height: 60px;
    max-width: 60px;
    display: block;
    margin: 100px auto 0 auto;
    animation-name: ${spinAnimation};
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
  }
`;

const LoadingSpinner = () => {
  return (
    <StyledSpinner>
      <img
        src="/images/spoon-and-fork.png"
        alt="resturant-icon"
      />
    </StyledSpinner>
  );
};

export default LoadingSpinner;
