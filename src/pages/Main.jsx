import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${props => (props.$isMobile ? '100%' : '100vh')};
`;

const Main = () => {
  const { isMobile } = useViewport();

  return <Container $isMobile={isMobile}>하이하이</Container>;
};

export default Main;
