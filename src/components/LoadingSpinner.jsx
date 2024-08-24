import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingSpinner = () => (
  <SpinnerContainer>
    <CircularProgress />
  </SpinnerContainer>
);

export default LoadingSpinner;
