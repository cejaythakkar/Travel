import React from 'react';

const ShowCase = () => {
  return (
    <>
      <div className="absolute h-full w-full top-0 left-0 bg-[#264a57] z-[50] mix-blend-color"></div>
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover "
      >
        <source
          src={'/assets/videos/petal_20230315_145204.mp4'}
          type="video/mp4"
        />
      </video>
      <img src="./assets/images/logo-no-background.png" className="w-[100px] h-[100px] bg-accent-300 z-[888]"/>
      <div className="relative z-[100] p-2.5 w-full flex flex-col justify-center flex-auto lg:max-w-[75%]">
        <h2 className="text-white font-roboto font-semibold text-xl sm:text-2xl md:text-3xl text-center lg:text-left">
          Hello there, I&apos;m
        </h2>
        <h2 className="text-primary-100 font-roboto font-bold text-3xl sm:text-4xl md:text-6xl text-center lg:text-left flex gap-2">
          Jay Thakkar aka Indian Buzzard
        </h2>
        <h3 className="text-white font-roboto mt-4 text-xl sm:text-2xl md:text-3xl text-center lg:text-left">
          <span className="text-primary-100">Welcome!</span> to my{' '}
          <span className="text-primary-100">blog.</span>
        </h3>
        <h4 className="text-white font-roboto mt-4 text-md sm:text-xl md:text-2xl text-center lg:text-left">
          Here, I share all my expreience of the all the road trips, must visit
          places, must visit dhabas, must try food, culture of the place, its
          importance, expected cost etc.
        </h4>
      </div>
      {/* Social Media Icons */}
      
      {/* <div className="text-3xl font-bold underline p-6 md:font-light">
        ShowCase
      </div>
      <div className="text-3xl font-bold underline p-6">ShowCase</div> */}
    </>
  );
};

export default ShowCase;
