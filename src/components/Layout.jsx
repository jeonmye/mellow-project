import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  padding: ${props => (props.$pathname == '/' ? 'none' : '32px')};
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;
const KakaoChatImg = styled.img`
  position: fixed;
  z-index: 999;
  right: 20px;
  bottom: 20px;
  width: '72px';
  height: '72px';
`;
const Layout = () => {
  const { pathname } = useLocation();
  return (
    <LayoutWrapper>
      <Nav />
      <Content $pathname={pathname}>
        <Outlet />
      </Content>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
