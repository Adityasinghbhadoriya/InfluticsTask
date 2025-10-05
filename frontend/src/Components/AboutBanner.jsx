import React from 'react';
import bgImage from '../assets/aboutbg.jpeg';

const AboutBanner = ({ title, breadcrumb }) => {
  return (
    <div className="relative w-full h-[60vh]">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Banner Background"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay (only background) */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-400 opacity-60"></div>

      {/* Text (above overlay, full opacity) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h1>
          <a href="#" className="hover:text-black">Home</a> / {breadcrumb}
        </h1>
      </div>
    </div>
  );
};

export default AboutBanner;
