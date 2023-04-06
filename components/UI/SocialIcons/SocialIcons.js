import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const icons = [
  { id: 'facebook', icon: FaFacebook, url: '' },
  { id: 'instagram', icon: FaInstagram, url: '' },
  { id: 'youtube', icon: FaYoutube, url: '' },
  { id: 'whatsapp', icon: FaWhatsapp, url: '' },
];

const SocialIcon = ({ SocialIcon }) => {
  return (
    <li className="flex items-center mr-8">
      <a href={SocialIcon.url} target="_blank">
        <SocialIcon.icon className="text-white font-bold h-[24px] w-[24px]" />
      </a>
    </li>
  );
};

const SocialIcons = () => {
  return (
    <div className="flex flex-none z-[100] h-[40px] p-2.5 justify-center lg:justify-start h-full items-end">
      <ul className="flex">
        {icons.map((item) => (
          <SocialIcon SocialIcon={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
