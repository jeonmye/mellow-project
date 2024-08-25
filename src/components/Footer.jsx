import React from 'react';
import styled from 'styled-components';
import useViewport from '../hooks/useViewPort';
import LogoImg from '../assets/images/logo/logo.png';

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
  font-size: 9px;
  color: black;
`;

const Logo = styled.img`
  width: 70px;
  height: 100%;
`;

const RowBox = styled.div`
  display: flex;
  gap: 26px;
`;

const CloumnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Footer = () => {
  const { isMobile } = useViewport();
  return (
    <Container $isMobile={isMobile}>
      <Wrapper>
        <RowBox>
          <Logo $isMobile={isMobile} src={LogoImg} alt="mellow" />
          <CloumnBox>
            <span>경기도 고양시 덕양구 권율대로656 (원흥동) 클래시아 더퍼스트 17층 1710</span>
            <RowBox>
              <span>대표 : 박건형</span>
              <span>이메일 : mov@mellow.mov</span>
            </RowBox>
            <>
              <span>COPYRIGHT(C) 2024. ALL RIGHTS RESERVED.</span>
            </>
          </CloumnBox>

          <span>사업자번호 : 000-00-00000 </span>

          <span>TEL : 000-0000-0000</span>
        </RowBox>
      </Wrapper>
      <Wrapper></Wrapper>
      <Wrapper></Wrapper>
    </Container>
  );
};
export default Footer;
