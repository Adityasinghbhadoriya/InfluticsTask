import React from 'react';
import pricingplanbg from '../assets/img/pricing-plan-bg.svg';
import pricingplanicon from '../assets/img/pricing-plan-icon.svg';
import checkmark from '../assets/img/checkmark.svg';

const PricingPage = () => {
  const features = [
    "Amazon Prime video",
    "Disney+ Basic (With Ads)",
    "Limited content, ads included",
    "Unlimited Application Installation",
    "Unlimited Download Data",
    "Additional sports and entertainment",
  ];

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center gap-10 py-20">
      <div className="relative">
        
        {/* Main Card Image */}
        <img
          src={pricingplanbg}
          alt=""
          className="w-full object-cover border rounded-3xl"
          style={{
            clipPath: "polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20px)"
          }}
        />

        {/* Icon in cut corner */}
        <img
          src={pricingplanicon}
          alt=""
          className="absolute top-5 left-5 transform -translate-x-1/4 -translate-y-1/4 w-16 h-16 p-2 bg-white rounded-2xl shadow-lg"
        />

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between">
          
          {/* Title + Price */}
          <div className="flex justify-between items-start">
            <div className='pl-20'>
              <h1 className="text-xl font-bold">Basic Plan</h1>
              <p className="mt-2 text-gray-700 text-sm">Collaboratively formulate</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">$29</h1>
            </div>
          </div>

          {/* Features */}
          <div className="mt-4 flex flex-col gap-3 bg-white/10 p-4 rounded-lg">
            {features.map((feature, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img src={checkmark} alt="check" className="w-5 h-5"/>
                  <span className="text-gray-800">{feature}</span>
                </div>
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-500 text-gray-500 font-bold">
                  ?
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="w-full mt-5 bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition">
            Get Started Now
          </button>

        </div>
      </div>
      <div className="relative">
        
        {/* Main Card Image */}
        <img
          src={pricingplanbg}
          alt=""
          className="w-full object-cover border rounded-3xl"
          style={{
            clipPath: "polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20px)"
          }}
        />

        {/* Icon in cut corner */}
        <img
          src={pricingplanicon}
          alt=""
          className="absolute top-5 left-5 transform -translate-x-1/4 -translate-y-1/4 w-16 h-16 p-2 bg-white rounded-2xl shadow-lg"
        />

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between">
          
          {/* Title + Price */}
          <div className="flex justify-between items-start">
            <div className='pl-20'>
              <h1 className="text-xl font-bold">Basic Plan</h1>
              <p className="mt-2 text-gray-700 text-sm">Collaboratively formulate</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">$29</h1>
            </div>
          </div>

          {/* Features */}
          <div className="mt-4 flex flex-col gap-3 bg-white/10 p-4 rounded-lg">
            {features.map((feature, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img src={checkmark} alt="check" className="w-5 h-5"/>
                  <span className="text-gray-800">{feature}</span>
                </div>
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-500 text-gray-500 font-bold">
                  ?
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="w-full mt-5 bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition">
            Get Started Now
          </button>

        </div>
      </div>
      <div className="relative">
        
        {/* Main Card Image */}
        <img
          src={pricingplanbg}
          alt=""
          className="w-full object-cover border rounded-3xl"
          style={{
            clipPath: "polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20px)"
          }}
        />

        {/* Icon in cut corner */}
        <img
          src={pricingplanicon}
          alt=""
          className="absolute top-5 left-5 transform -translate-x-1/4 -translate-y-1/4 w-16 h-16 p-2 bg-white rounded-2xl shadow-lg"
        />

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between">
          
          {/* Title + Price */}
          <div className="flex justify-between items-start">
            <div className='pl-20'>
              <h1 className="text-xl font-bold">Basic Plan</h1>
              <p className="mt-2 text-gray-700 text-sm">Collaboratively formulate</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">$29</h1>
            </div>
          </div>

          {/* Features */}
          <div className="mt-4 flex flex-col gap-3 bg-white/10 p-4 rounded-lg">
            {features.map((feature, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img src={checkmark} alt="check" className="w-5 h-5"/>
                  <span className="text-gray-800">{feature}</span>
                </div>
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-500 text-gray-500 font-bold">
                  ?
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="w-full mt-5 bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition">
            Get Started Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default PricingPage;
