import * as React from 'react';
import { useNavigate } from 'react-router';
import LogoImg from '../assets/images/logo/logo.png';
import NAV_LIST from '../constant/navList';
import useViewport from '../hooks/useViewPort';
import { FaYoutube } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className="w-full">
      <Logo size={'l'} />
    </div>
  );
};

export default Nav;

const Logo = ({ size }) => {
  const sizeVariants = {
    s: '100',
    m: '150',
    l: '200',
    xl: '250',
    xxl: '300',
  };

  return (
    <>
      <nav className="flex flex-col items-center justify-between w-full">
        <div className="flex justify-between w-full md:max-w-[1280px]  text-caption2-extra-bold text-gray300 my-3 px-5">
          <ul className="flex gap-9">
            {HEADER_LIST.map(item => (
              <li>{item.label}</li>
            ))}
          </ul>
          <div className="flex gap-4">
            <FaYoutube size="20" />
          </div>
        </div>

        <div className="w-full border-b-[1px] border-gray-100"></div>

        <img src={LogoImg} alt="멜로우_로고" className="object-center" width={sizeVariants[size]} />

        <div className="w-full border-b-[1px] border-gray-100"></div>
        <div className="sticky top-0 ">
          <ul className="flex w-full justify-center gap-10 my-4 text-h7-bold text-gray600 px-5 ">
            {PORTFOLIO_MENU_LIST.map(item => (
              <li className="">{item.label}</li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

const PORTFOLIO_MENU_LIST = [
  { label: 'ALL', path: '/' },
  { label: 'BRAND MOVIE', path: '/brand-movie' },
  { label: 'CHARACTER', path: '/character' },
  { label: 'NEW MEDIA', path: '/new-media' },
  { label: 'BRAND DESIGN', path: '/brand-design' },
];

const HEADER_LIST = [
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'PDF', path: '/pdf' },
  { label: 'Contact', path: '/contact' },
];
