import React from "react";
import thumb1 from "../assets/reelimage1.jpg";
import thumb2 from "../assets/reelimage2.jpg";
import thumb3 from "../assets/reelimage3.jpg";
import thumb4 from "../assets/reelimage4.jpg";

const StaticReelsShowcase = ({ reels }) => {
  const defaultReels = [
    { thumb: thumb1, title: "Can Robot Solve This ...?", views: "16M views" },
    { thumb: thumb2, title: "Dancing Bot in Action", views: "9.2M views" },
    { thumb: thumb3, title: "AI Creating Art", views: "12M views" },
    { thumb: thumb4, title: "Fun with Coding", views: "5.6M views" },
  ];

  const reelsToShow = reels || defaultReels;

  return (
    <section className="py-6 lg:px-10 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 pl-5 w-[90vw] lg:w-[87vw] lg:pl-28">
        {reelsToShow.map((reel, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="relative w-full pb-[140%] rounded-xl overflow-hidden bg-center bg-cover shadow-lg"
              style={{ backgroundImage: `url(${reel.thumb})` }}
            >
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-l-[16px] border-l-red-500 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </button>
            </div>
            <div className="bg-white w-full py-2 px-2 mt-2 rounded-b-xl text-center sm:text-left">
              <h5 className="font-semibold text-md">{reel.title}</h5>
              <p className="text-gray-600 text-sm">{reel.views}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaticReelsShowcase;
