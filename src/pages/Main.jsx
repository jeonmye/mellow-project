import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${props => (props.$isMobile ? '100%' : '100vh')};
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 0;
`;

const Main = () => {
  const { isMobile } = useViewport();

  return (
    <Container $isMobile={isMobile}>
      <Banner>
        <span>안녕하세요</span>
        <span>종합 디자인 스튜디오</span>
        <span>멜로우 주식회사입니다.</span>
      </Banner>
    </Container>
  );
};

export default Main;
