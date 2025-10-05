import React from 'react';
import bgImage from '../assets/aboutbg.jpeg';
import socialicon1 from '../assets/img/social-icon-1.png';
import socialicon2 from '../assets/img/social-icon-2.png';
import socialicon3 from '../assets/img/social-icon-3.png';
import socialicon4 from '../assets/img/social-icon-4.png';

const AboutBanner = ({ title, breadcrumb }) => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[50vh] overflow-hidden">
      <img
        src={bgImage}
        alt="Banner Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-400 opacity-60"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
        <h1 className="mt-2 text-sm sm:text-base">
          <a href="#" className="hover:text-black">Home</a> / {breadcrumb}
        </h1>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-20">
        {[socialicon1, socialicon2, socialicon3, socialicon4].map((icon, idx) => (
          <img
            key={idx}
            src={icon}
            alt={`social-${idx}`}
            className={`w-10 h-10 sm:w-12 sm:h-12 absolute animate-float${idx + 1} cursor-pointer`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float1 {
          0% { top: 10%; left: 5%; transform: translate(0,0) rotate(0deg);}
          25% { top: 20%; left: 15%; transform: translate(0,0) rotate(10deg);}
          50% { top: 15%; left: 10%; transform: translate(0,0) rotate(-10deg);}
          75% { top: 25%; left: 20%; transform: translate(0,0) rotate(5deg);}
          100% { top: 10%; left: 5%; transform: translate(0,0) rotate(0deg);}
        }
        @keyframes float2 {
          0% { top: 30%; left: 80%; transform: translate(0,0) rotate(0deg);}
          25% { top: 35%; left: 75%; transform: translate(0,0) rotate(15deg);}
          50% { top: 40%; left: 78%; transform: translate(0,0) rotate(-15deg);}
          75% { top: 35%; left: 82%; transform: translate(0,0) rotate(10deg);}
          100% { top: 30%; left: 80%; transform: translate(0,0) rotate(0deg);}
        }
        @keyframes float3 {
          0% { top: 50%; left: 10%; transform: translate(0,0) rotate(0deg);}
          25% { top: 55%; left: 15%; transform: translate(0,0) rotate(-10deg);}
          50% { top: 50%; left: 12%; transform: translate(0,0) rotate(10deg);}
          75% { top: 52%; left: 8%; transform: translate(0,0) rotate(-5deg);}
          100% { top: 50%; left: 10%; transform: translate(0,0) rotate(0deg);}
        }
        @keyframes float4 {
          0% { top: 70%; left: 85%; transform: translate(0,0) rotate(0deg);}
          25% { top: 72%; left: 80%; transform: translate(0,0) rotate(15deg);}
          50% { top: 68%; left: 83%; transform: translate(0,0) rotate(-10deg);}
          75% { top: 71%; left: 87%; transform: translate(0,0) rotate(5deg);}
          100% { top: 70%; left: 85%; transform: translate(0,0) rotate(0deg);}
        }

        .animate-float1 { animation: float1 10s ease-in-out infinite; }
        .animate-float2 { animation: float2 12s ease-in-out infinite; }
        .animate-float3 { animation: float3 8s ease-in-out infinite; }
        .animate-float4 { animation: float4 11s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default AboutBanner;
