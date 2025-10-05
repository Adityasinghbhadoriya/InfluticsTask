import React, { useState } from 'react'
import StaticReelsShowcase from './StaticReelsShowcase'
import videoimg2 from '../assets/video-big2.png'
import arrowicon from '../assets/right-arrow.png'
import thumb1 from "../assets/reelimage1.jpg";
import thumb2 from "../assets/reelimage2.jpg";
import thumb3 from "../assets/reelimage3.jpg";
import thumb4 from "../assets/reelimage4.jpg";
import thumb5 from "../assets/reelimage5.jpg";
import thumb6 from "../assets/reelimage6.jpg";

const StreamingVideos2_page = () => {
    const buttons = [
        "All Videos",
        "Lifestyle",
        "Fashion",
        "Beauty",
        "Fitness & Health",
        "Recipe Videos",
        "Travel"
    ];

    const allThumbs = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6];

    const [firstReels, setFirstReels] = useState([
        { thumb: thumb1, title: "Title 1", views: "10M views" },
        { thumb: thumb2, title: "Title 2", views: "12M views" },
        { thumb: thumb3, title: "Title 3", views: "9M views" },
        { thumb: thumb4, title: "Title 4", views: "15M views" },
    ]);

    const [activeButton, setActiveButton] = useState(0);

    const shuffleReels = (index) => {
        setActiveButton(index);

        const shuffled = [...allThumbs].sort(() => 0.5 - Math.random());
        setFirstReels([
            { thumb: shuffled[0], title: "Title 1", views: "10M views" },
            { thumb: shuffled[1], title: "Title 2", views: "12M views" },
            { thumb: shuffled[2], title: "Title 3", views: "9M views" },
            { thumb: shuffled[3], title: "Title 4", views: "15M views" },
        ]);
    }

    return (
        <div className='w-full min-h-screen bg-white'>
            <div className='flex gap-5 items-center justify-center pt-10 pb-7'>
                {buttons.map((btn, i) => (
                    <button
                        key={i}
                        onClick={() => shuffleReels(i)}
                        className={`
                            px-5 py-2 border rounded-lg cursor-pointer transition-all duration-300
                            ${activeButton === i 
                                ? "bg-gradient-to-r from-red-500 to-orange-400 text-white border-red-500"
                                : "border-red-400 text-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-400 hover:text-white"
                            }
                        `}
                    >
                        {btn}
                    </button>
                ))}
            </div>
            <StaticReelsShowcase reels={firstReels} />
            <div className='flex items-center justify-center mt-5'>
                <div className='relative w-[80vw] h-[64vh] bg-black rounded-3xl overflow-hidden'>
                    <img
                        src={videoimg2}
                        alt="Main video"
                        className='rounded-xl w-full h-full object-cover transition-all duration-500'
                    />
                    <div className='absolute top-1/2 left-1/2 z-10'>
                        <button className="flex items-center justify-center">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <div className="w-0 h-0 border-l-[16px] border-l-red-500 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <StaticReelsShowcase />
            <StaticReelsShowcase />

            <div className="flex items-center justify-center gap-3 pb-20 pt-7">
                <img src={arrowicon} alt="Left Arrow" className="w-4 h-4 rotate-180 cursor-pointer" />
                {[1, 2, 3, 4, 5].map((num, i) => (
                    <div
                        key={i}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer transition-colors duration-300
                            ${i === 0
                                ? "bg-red-500 text-white font-bold"
                                : "bg-gray-200 text-black hover:bg-red-500 hover:text-white font-bold"
                            }
                        `}
                    >
                        {num}
                    </div>
                ))}
                <img src={arrowicon} alt="Right Arrow" className="w-4 h-4 cursor-pointer" />
            </div>
        </div>
    )
}

export default StreamingVideos2_page
