import React from 'react';
import Navbar from '../Navbar';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import video from '../../public/assets/videos/petal_20230315_145204.mp4'

const ShowCase = () => {
  return (
    <>
      <section className="container mx-auto flex-auto realtive lg:max-w-[90%] flex flex-col my-5">
        <Navbar />
        <div className="absolute h-full w-full top-0 left-0 bg-[#264a57] z-[50] mix-blend-color"></div>
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover "
        >
          <source
            src={'_next/static/media/videos/petal_20230315_145204.mp4'}
            type="video/mp4"
          />
        </video>
        <div className="relative z-[100] p-2.5 w-full flex flex-col justify-center flex-auto lg:max-w-[75%]">
          <h2 className="text-white font-roboto font-bold text-3xl sm:text-4xl md:text-6xl text-center lg:text-left">
            Aatapi Wonderland
          </h2>
          <h3 className="text-white font-roboto mt-4 text-xl sm:text-2xl md:text-3xl text-center lg:text-left">
            AATAPI Wonderland is award winning theme park in the outskirts of
            Vadodara at Ajwa. A government project spread over 70 acres of land.
          </h3>
          <p className="text-white mt-4 font-light font-roboto text-sm md:text-base text-center lg:text-left">
            Amusement park with fairground rides, zip lining & crazy golf, plus
            a musical water & light show.
          </p>
        </div>
        {/* Social Media Icons */}
        <div className="flex flex-none z-[100] h-[40px] p-2.5 justify-center lg:justify-start">
          <ul className="flex">
            <li className="flex items-center mr-5">
              <a>
                <FaFacebook className="text-white font-bold h-[24px] w-[24px]" />
              </a>
            </li>
            <li className="flex items-center mr-5">
              <a>
                <FaInstagram className="text-white font-bold h-[24px] w-[24px]" />
              </a>
            </li>
            <li className="flex items-center mr-5">
              <a>
                <FaYoutube className="text-white font-bold h-[24px] w-[24px]" />
              </a>
            </li>
            <li className="flex items-center mr-5">
              <a>
                <FaWhatsapp className="text-white font-bold h-[24px] w-[24px]" />
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="text-3xl font-bold underline p-6 md:font-light">
        ShowCase
      </div>
      <div className="text-3xl font-bold underline p-6">ShowCase</div> */}
      </section>
    </>
  );
};

export default ShowCase;
