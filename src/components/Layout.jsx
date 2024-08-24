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
  /* padding: ${props => (props.$pathname == '/' ? 'none' : '32px')}; */
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  max-width: ${props => (props.$pathname == '/' ? 'none' : '1200px')};
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
