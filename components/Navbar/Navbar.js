import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="w-full h-[120px] z-[100] flex relative justify-between">
      <div className="flex items-center px-2.5">
        <Image
          src={require('../../public/assets/images/logo-no-background.png')}
          alt="logo"
          width="125"
          height="50"
          className="w-[60px] sm:w-[75px] md:w-[100px]"
        />
      </div>
      <div className="hidden md:block h-full w-full px-2.5">
        <ul className="h-full w-full flex items-center justify-end">
          <li className="mr-8">
            <Link href="/" className="text-secondary-200 font-bold uppercase">
              Bucket List
            </Link>
          </li>
          <li className="mr-8 ">
            <Link href="/" className="text-secondary-200 font-bold uppercase">
              Trips
            </Link>
          </li>
          <li className="last:mr-0">
            <Link href="/" className="text-secondary-200 font-bold uppercase">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden flex items-center hover:cursor-pointer p-2.5">
        <FaBars size="lg" className="text-white w-[40px] h-[40px]" />
      </div>
    </div>
  );
};

export default Navbar;
