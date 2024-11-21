import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../assets/images/logo/logo.png';

const Logo = ({ size, goHome }) => {
  const sizeVariants = {
    s: '100',
    m: '150',
    l: '200',
    xl: '250',
    xxl: '300',
  };

  const navigate = useNavigate();
  return (
    <img
      src={LogoImg}
      alt="멜로우_로고"
      className="object-center cursor-pointer"
      width={sizeVariants[size]}
      onClick={() => (goHome ? navigate('/') : null)}
    />
  );
};

export default Logo;
