import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';

const Container = styled.div`
  color: #5c5c5c;
  font-size: ${props => (props.$isMobile ? 8 : 14)}px;
  line-height: ${props => (props.$isMobile ? 5 : 20)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
  align-items: center;
`;

const Bar = styled.div`
  border-left: 1px solid #aaaaaa;
  height: ${props => (props.$isMobile ? 8 : 16)}px;
`;
const Footer = () => {
  const { isMobile } = useViewport();
  return (
    <Container $isMobile={isMobile}>
      <Wrapper>
        <span>앤텔레콤 셀프개통</span>
        <Bar $isMobile={isMobile} />
        <span>000-00-00000</span>
        <Bar $isMobile={isMobile} />
        <span>abcd@naver.com</span>
      </Wrapper>
      <Wrapper>
        <span>서울특별시 OO구 OOO로 111, 3층 000호 (OO동, OO프라자)</span>
      </Wrapper>
      <Wrapper>
        <span>대표 홍길동</span>
        <Bar $isMobile={isMobile} />
        <span>010-0000-0000</span>
      </Wrapper>
    </Container>
  );
};
export default Footer;
