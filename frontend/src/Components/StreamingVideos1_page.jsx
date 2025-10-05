import React, { useState } from 'react'
import videoimg1 from '../assets/video-big.png'
import videoimg2 from '../assets/video-big2.png'
import videoimg3 from '../assets/video-big3.png'
import thumb1 from "../assets/reelimage1.jpg";
import thumb2 from "../assets/reelimage2.jpg";
import thumb3 from "../assets/reelimage3.jpg";
import thumb4 from "../assets/reelimage4.jpg";
import thumb5 from "../assets/reelimage5.jpg";
import thumb6 from "../assets/reelimage6.jpg";
import arrowicon from '../assets/right-arrow.png'

const StreamingVideos1_page = () => {
  const buttons = [
    "All Videos",
    "Lifestyle",
    "Fashion",
    "Beauty",
    "Fitness & Health",
    "Recipe Videos",
    "Travel",
  ];

  const videoImages = [videoimg1, videoimg2, videoimg3];
  const [activeIndex, setActiveIndex] = useState(0);

  const currentVideo = videoImages[activeIndex % 3];

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const thumbnails = [thumb2, thumb3, thumb4, thumb5, thumb1, thumb6];

  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='flex flex-wrap gap-3 justify-center pt-10 px-4 sm:px-6 lg:px-0'>
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => handleButtonClick(i)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 border border-red-400 rounded-lg cursor-pointer transition-all duration-300
        ${activeIndex === i
                ? "bg-gradient-to-r from-red-500 to-orange-400 text-white"
                : "text-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-400 hover:text-white"
              }
        w-full sm:w-auto text-sm sm:text-base
      `}
          >
            {btn}
          </button>
        ))}
      </div>


      <div className='flex items-center justify-center mt-10 sm:mt-12 px-4 sm:px-6 lg:px-0'>
        <div className='relative w-full sm:w-[90%] lg:w-[80vw] h-[50vh] sm:h-[60vh] lg:h-[75vh] bg-black rounded-xl overflow-hidden'>
          <img
            src={currentVideo}
            alt="Main video"
            className='rounded-xl w-full h-full object-cover transition-all duration-500'
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>

          <div className='absolute bottom-5 sm:bottom-10 left-5 sm:left-10 z-10'>
            <button className="flex items-center justify-center">
              <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </button>
            <div>
              <h1 className='mt-2 sm:mt-5 font-semibold text-white hover:text-pink-500 text-lg sm:text-xl'>
                Smiley woman pop party studio medium shot
              </h1>
              <h1 className='text-white mt-1 sm:mt-3 text-sm sm:text-base'>@facebook</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap mt-10 bg-white p-4 sm:p-10 gap-5 justify-center'>
        {thumbnails.map((thumb, i) => (
          <div key={i} className='relative h-[60vw] sm:h-[30vw] w-full sm:w-[39vw] max-w-[600px] bg-black rounded-xl overflow-hidden'>
            <img src={thumb} alt="" className='w-full h-full rounded-xl object-cover' />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
            <div className='absolute bottom-5 sm:bottom-10 left-5 sm:left-10 z-10'>
              <button className="flex items-center justify-center">
                <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </button>
              <div>
                <h1 className='mt-2 sm:mt-5 font-semibold text-white hover:text-pink-500 text-lg sm:text-xl'>
                  Smiley woman pop party studio medium shot
                </h1>
                <h1 className='text-white mt-1 sm:mt-3 text-sm sm:text-base'>@facebook</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-10 pb-20 px-4 sm:px-0 flex-wrap">
        <img
          src={arrowicon}
          alt="Left Arrow"
          className="w-4 h-4 rotate-180 cursor-pointer"
        />
        {[1, 2, 3, 4, 5].map((num, i) => (
          <div
            key={i}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer transition-colors duration-300
        ${i === 0 ? "bg-red-500 text-white font-bold" : "bg-gray-200 text-black hover:bg-red-500 hover:text-white font-bold"}
      `}
          >
            {num}
          </div>
        ))}
        <img
          src={arrowicon}
          alt="Right Arrow"
          className="w-4 h-4 cursor-pointer"
        />
      </div>

    </div>
  )
}

export default StreamingVideos1_page;
