import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col">
      <Nav />
      <div className="flex flex-col w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

// const LayoutWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const Content = styled.div`
//   /* padding: ${props => (props.$pathname == '/' ? 'none' : '32px')}; */
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   /* height: 100vh; */
//   /* margin: auto; */
//   max-width: 'none'
// `;

// const Layout = () => {
//   const { pathname } = useLocation();
//   return (
//     <LayoutWrapper>
//       <Nav />
//       <Content $pathname={pathname}>
//         <Outlet />
//       </Content>
//       {/* <Footer /> */}
//     </LayoutWrapper>
//   );
// };
