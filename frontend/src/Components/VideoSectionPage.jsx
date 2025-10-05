import React from "react";
import videoimg from "../assets/video-details-img.jpg";
import StaticReelsShowcase from "./StaticReelsShowcase";

const VideoSectionPage = () => {
  return (
    <div className="w-full bg-white pb-20 px-4 lg:px-40">

      {/* Video + Info Card */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 pt-20">

        {/* Video */}
        <div className="w-full lg:w-[65%] h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[64vh] relative rounded-3xl overflow-hidden order-1">
          <img
            src={videoimg}
            alt="Main video"
            className="rounded-xl w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
            <button className="flex items-center justify-center group">
              <div className="w-20 h-20 border border-white group-hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-0 h-0 border-l-[20px] border-l-white group-hover:border-l-red-500 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1 transition-all duration-300"></div>
              </div>
            </button>
            <h1 className="text-white text-md font-semibold mt-2">Watch Now</h1>
          </div>
        </div>

        {/* Video Info Card */}
        <div className="w-full lg:w-[30%] lg:h-[20%] bg-red-100 p-6 rounded-3xl flex-shrink-0 order-3 lg:order-2 mt-6 lg:mt-0">
          <h1 className="font-semibold">Video Size</h1>
          <h1 className="mt-1 text-sm lg:text-base">3840 x 2160 px - MP4 - 379 MB</h1>
          <div className="w-full border-b border-gray-400 mt-5"></div>
          <h1 className="font-semibold mt-5">Price</h1>
          <h1>
            <span className="font-bold">$170</span> for this video clip
          </h1>
          <button className="bg-gradient-to-r from-yellow-500 to-pink-500 mt-5 text-white w-full lg:h-5 p-4 lg:p-6 font-semibold rounded-md flex items-center justify-center gap-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 transition duration-300">
            + Contact with Purchase
          </button>
        </div>

      </div>

      {/* Text Description */}
      <div className="mt-8 lg:mt-6 max-w-4xl order-2 lg:order-3">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Epic Pool Fails with My Family Challenge*
        </h1>
        <p className="text-gray-400 mt-5 text-sm sm:text-base">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
      </div>

      <StaticReelsShowcase />
    </div>
  );
};

export default VideoSectionPage;
