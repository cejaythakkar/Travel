import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import Login from '../Login';
import { createPortal } from 'react-dom';
import Logo from '../../public/assets/images/logo-no-background.svg';
import SocialIcons from '../UI/SocialIcons';

const Navbar = () => {
  const [componentMounted, setComponentMounted] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const loginClickHandler = (value) => {
    setShowLogin(value);
  };
  const onloginClick = (e) => {
    loginClickHandler(true);
  };
  useEffect(() => {
    typeof window !== 'undefined' && setComponentMounted(true);
  }, []);
  return (
    <div className="w-full h-[120px] z-[100] flex relative justify-between">
      <SocialIcons />
      <div className="flex items-end px-2.5 absolute h-full left-[50%] -translate-x-[50%] pb-2.5">
        <Link href="/" className='fill-primary-100'>
          <Logo className="w-[120px] h-[80px]" />
        </Link>
      </div>
      <div className="hidden md:block h-full px-2.5">
        <ul className="h-full w-full p-2.5 flex items-end justify-end">
          <li className="mr-8">
            <Link href="/" className="text-white font-bold uppercase">
              About
            </Link>
          </li>
          <li className="mr-8 ">
            <Link href="/" className="text-white font-bold uppercase">
              Blogs
            </Link>
          </li>
          <li className="mr-8 ">
            <Link href="/notes" className="text-white font-bold uppercase">
              Notes
            </Link>
          </li>
          <li className="last:mr-0">
            <a
              className="text-white font-bold uppercase"
              onClick={onloginClick}
            >
              Login
            </a>
          </li>
        </ul>
      </div>
      <div className="md:hidden flex items-center hover:cursor-pointer p-2.5">
        <FaBars size="lg" className="text-white w-[40px] h-[40px]" />
      </div>
      {componentMounted &&
        createPortal(
          <Login showLogin={showLogin} loginClickHandler={loginClickHandler} />,
          window.document.getElementById('__next')
        )}
    </div>
  );
};

export default Navbar;
