import React from 'react';
import bk from '../../asset/Untitled-3.png';
import icon from '../../asset/star-6-48.ico';

const Hero = () => {
  return (
    <div className="hero-container bg-cover h-full bg-no-repeat bg-center" style={{ backgroundImage: `url(${bk})` }}>
      <div className="max-w-[1200px] w-full h-screen mx-auto text-center sm:text-left flex flex-col justify-center">
        <p className="font-semibold text-xl pb-2 px-0 mx-0 text-white">Goodfirm</p>
        <div className="flex justify-center sm:justify-start px-0 mx-0">
          {[...Array(5)].map((_, index) => (
            <img className="mr-1 w-6 h-6 sm:w-5 sm:h-5 text-yellow-400" src={icon} alt="/" key={index} />
          ))}
        </div>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white">
          Grow with Cloud.
        </h1>
        <div className="flex justify-center sm:justify-start items-center">
          <p className="md:text-3xl sm:text-4xl text-xl font-bold py-4">
            Experience Custom Cloud Solutions with
          </p>
        </div>
        <p className="md:text-lg text-xl font-bold text-white">
          World-Class Infrastructure and Boost Revenue with<br />Custom BaaS, IaaS, SaaS, and More.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="button-1 bg-green-600 w-[200px]  font-medium my-6 py-3 text-white hover:bg-white hover:text-blue-950">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
