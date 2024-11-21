import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import useViewport from '../hooks/useViewPort';
import Logo from './Logo';
import { FaYoutube } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { HEADER_LIST, PORTFOLIO_MENU_LIST } from '../constant/constant';

const Header = () => {
  const { isMobile } = useViewport();

  return (
    <div className="w-full overflow-visible">
      {!isMobile && (
        <nav className="flex flex-col items-center justify-between w-full tracking-wide">
          <TopBar />

          <div className="w-full border-b-[1px] border-gray-100"></div>
          <Logo size={'l'} goHome={true} />
          <div className="w-full border-b-[1px] border-gray-100"></div>

          <NavBar />
        </nav>
      )}
      {isMobile && <MobileHeader />}
    </div>
  );
};

export default Header;

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between w-full md:max-w-[1280px] text-caption2-extra-bold text-gray300 my-3 px-5">
      <ul className="flex gap-9">
        {HEADER_LIST.map((item, index) => (
          <li key={index} onClick={() => navigate(item.path)} className="cursor-pointer">
            {item.label}
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <FaYoutube size="20" />
      </div>
    </div>
  );
};

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 bg-white">
      <ul className="flex w-full justify-center gap-10 my-4 text-h7-bold text-gray600 px-5">
        {PORTFOLIO_MENU_LIST.map((item, index) => (
          <li key={index} onClick={() => navigate(item.path)} className="cursor-pointer">
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MobileHeader = () => (
  <div className="sticky top-0 bg-white">
    <div className="flex justify-center  items-center py-3">
      <Logo size={'m'} goHome={true} />
      {/* <div className="cursor-pointer">
        <FiMenu size="25" color="#464C53" />
      </div> */}
    </div>
    <div className="w-full border-b-[1px] border-gray-100"></div>
  </div>
);
