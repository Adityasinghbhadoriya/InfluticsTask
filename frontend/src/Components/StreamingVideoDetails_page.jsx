import React from 'react'
import videoimg from '../assets/video-details-img.jpg'
import { FaUser, FaTag } from "react-icons/fa";
import checkmark from '../assets/img/checkmark.svg'
import quotationIcon from '../assets/img/quotation-icon.svg'
import thumb1 from "../assets/reelimage1.jpg";
import thumb2 from "../assets/reelimage2.jpg";
import arrowicon from '../assets/right-arrow.png'

const StreamingVideoDetails_page = () => {
    return (
        <div className='w-full min-h-screen bg-white pb-20 px-4 sm:px-6 md:px-10 lg:px-0'>
            <div className='flex items-center justify-center pt-20'>
                <div className='relative w-full sm:w-[80%] md:w-[65vw] h-[30vh] sm:h-[50vh] md:h-[66vh] bg-black rounded-3xl overflow-hidden'>
                    <img
                        src={videoimg}
                        alt="Main video"
                        className='rounded-xl w-full h-full object-cover transition-all duration-500'
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>

                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center'>
                        <button className="flex items-center justify-center group">
                            <div className="w-16 sm:w-20 h-16 sm:h-20 border border-white group-hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer">
                                <div className="w-0 h-0 border-l-[16px] sm:border-l-[20px] border-l-white group-hover:border-l-red-500 border-t-[10px] sm:border-t-[12px] border-t-transparent border-b-[10px] sm:border-b-[12px] border-b-transparent ml-1 transition-all duration-300"></div>
                            </div>
                        </button>
                        <h1 className='text-sm sm:text-md text-white font-semibold mt-2'>Watch Now</h1>
                    </div>
                </div>
            </div>

            <div className="flex items-center ml-0 sm:ml-65 mt-5 gap-2">
                <FaTag className="text-red-500 rotate-90" />
                <span className="text-sm sm:text-base">brand awareness</span>
            </div>

            <div className='mt-10 px-0 sm:px-10 md:px-65'>
                <h1 className='text-xl sm:text-2xl md:text-2xl font-bold'>Dance Your Way to Brand Awareness</h1>
                <p className='text-gray-500 mt-5 text-sm sm:text-base'>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ontrary to popular belief</p>
                <p className='mt-6 text-gray-500 text-sm sm:text-base'>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                <h1 className='text-xl sm:text-2xl md:text-2xl font-bold mt-8'>Dance Your Way to Brand Awareness</h1>
                <p className='mt-5 text-gray-500 text-sm sm:text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <ul className="list-disc list-inside space-y-4 text-xs sm:text-sm mt-4 pb-10">
                    <li className="flex items-center">
                        <img src={checkmark} alt="dot" className="w-4 h-4 mr-2" />
                        Technology Support Allows Erie non-profit to Serve.
                    </li>
                    <li className="flex items-center">
                        <img src={checkmark} alt="dot" className="w-4 h-4 mr-2" />
                        Web design done Delightful Visualization
                    </li>
                    <li className="flex items-center">
                        <img src={checkmark} alt="dot" className="w-4 h-4 mr-2" />
                        Software Makes Your Profit Double if You Scale Properly.
                    </li>
                </ul>

                <div className='h-[180px] sm:h-30 w-full bg-red-100 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-2 sm:gap-5'>
                    <img src={quotationIcon} alt="" className='pt-2 sm:pt-6 lg:w-40 w-10' />
                    <p className='italic text-sm sm:text-lg text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</p>
                </div>

                <h1 className='text-xl sm:text-2xl md:text-2xl font-bold mt-10'>Why do we use it?</h1>
                <p className='text-gray-500 mt-5 text-sm sm:text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <p className='mt-7 text-gray-500 text-sm sm:text-base'>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ontrary to popular belief</p>
                <p className='mt-7 text-gray-500 text-sm sm:text-base'>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>

                <div className='h-[120px] sm:h-30 w-full rounded-xl bg-gradient-to-r from-red-600 to-orange-400 mt-20 flex flex-col sm:flex-row items-center justify-between p-4 sm:pr-10'>
                    <h1 className='text-2xl sm:text-4xl md:text-4xl text-white p-2 sm:p-10 font-semibold'>Looking to Hire Influencers?</h1>
                    <button className='bg-gradient-to-r from-yellow-500 to-pink-500 text-white px-4 py-2 sm:px-6 sm:py-3 font-semibold rounded-md flex items-center gap-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 transition duration-300 text-sm sm:text-base'>+ Contact with me</button>
                </div>
            </div>

            <div className='pt-10 sm:pt-20 mt-10 sm:mt-20 bg-red-50 px-2 sm:px-40'>
                <div className='flex flex-row sm:flex-row justify-between items-start sm:items-center'>
                    <h1 className='text-2xl sm:text-4xl font-bold mb-5 sm:mb-0'>My Related Podcast</h1>
                    <div className='flex flex-row mt-2 sm:mt-0 gap-2 sm:gap-3'>
                        <img src={arrowicon} alt="" className='w-4 sm:w-5 rotate-180' />
                        <img src={arrowicon} alt=""  className='w-4 sm:w-5'/>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center pt-5'>
                    <div className='relative w-full sm:w-[39vw] h-[50vw] sm:h-[30vw] bg-black rounded-xl overflow-hidden'>
                        <img src={thumb1} alt="" className='w-full h-full rounded-xl object-cover' />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
                        <div className='absolute bottom-5 sm:bottom-10 left-5 sm:left-10 z-10'>
                            <button className="flex items-center justify-center">
                                <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center shadow-lg">
                                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                                </div>
                            </button>
                            <div>
                                <h1 className='mt-2 sm:mt-5 font-semibold text-white hover:text-pink-500 text-sm sm:text-lg'>
                                    Smiley woman pop party studio medium shot
                                </h1>
                                <h1 className='text-white mt-1 sm:mt-3 text-xs sm:text-base'>@facebook</h1>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full sm:w-[39vw] h-[50vw] sm:h-[30vw] bg-black rounded-xl overflow-hidden'>
                        <img src={thumb1} alt="" className='w-full h-full rounded-xl object-cover' />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
                        <div className='absolute bottom-5 sm:bottom-10 left-5 sm:left-10 z-10'>
                            <button className="flex items-center justify-center">
                                <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center shadow-lg">
                                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                                </div>
                            </button>
                            <div>
                                <h1 className='mt-2 sm:mt-5 font-semibold text-white hover:text-pink-500 text-sm sm:text-lg'>
                                    Smiley woman pop party studio medium shot
                                </h1>
                                <h1 className='text-white mt-1 sm:mt-3 text-xs sm:text-base'>@facebook</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StreamingVideoDetails_page
