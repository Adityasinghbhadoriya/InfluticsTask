import React from 'react'
import innerAboutbg from '../assets/img/inner-about-left-bg.png'
import innerAboutimg from '../assets/inner-about-img.png'
import signature from '../assets/img/signature.jpg'

const AboutCard = () => {
  return (
    
          <div className='bg-white pl-45 pt-15 pb-15 '>
            <div className='w-[75vw] h-[70vh] border border-gray-300 rounded-xl flex '>
                {/* left section */}
                <div className='relative'>
                    <img src={innerAboutbg} className='w-[30vw] h-[70vh] rounded-xl' alt="" />
                    <div className='h-75 w-75 bg-white   rounded-full absolute top-4 left-18'>
                        <img src={innerAboutimg} className='mt-[14px] ml-[14px]' alt="" />
                        <div className='bg-green-400 w-30 absolute top-14 font-semibold text-sm -left-10  p-1 rounded-full text-white'>85.5M Followers</div>
                        <div className='pt-10 pl-22'>
                            <h1 className='text-2xl text-white font-semibold'>Silvia Pinho</h1>
                        </div>
                        <div className='pt-5 pl-20'>
    
                        <button className='px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white'>Get in Touch</button>
                        </div>
                        <div><h1 className='font-semibold text-white pl-8 pt-5 text-md'>typically response within 24 hours</h1></div>
                    </div>
                </div>
                {/* Right section */}
                <div className="flex-1 pr-10 ml-10 pt-8">
                        <h2 className="text-3xl font-bold mb-6">
                            I'm a Social Media influencer & digital  <br /> content creator
                        </h2>
                        <p className="mb-6  text-sm">
                            consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra <br /> nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget <br /> mauris. Donec eget fermentum libero, ac aliquet lectus.
                        </p>
    
                        <ul className="mb-6 list-disc list-inside space-y-4 text-sm font-semibold">
                            <li className="flex items-center">
                                <img src="https://influtics.temptics.com/assets/img/checkmark-badge.svg" alt="dot" className="w-4 h-4 mr-2" />
                                Non mattis nulla, in ultrices diam
                            </li>
                            <li className="flex items-center">
                                <img src="https://influtics.temptics.com/assets/img/checkmark-badge.svg" alt="dot" className="w-4 h-4 mr-2" />
                                Web design done Delightful Visualization
                            </li>
                            <li className="flex items-center">
                                <img src="https://influtics.temptics.com/assets/img/checkmark-badge.svg" alt="dot" className="w-4 h-4 mr-2" />
                                Alienum phaedrum torquatos nec eu, vis detraxit periculis
                            </li>
                            <li className="flex items-center">
                                <img src="https://influtics.temptics.com/assets/img/checkmark-badge.svg" alt="dot" className="w-4 h-4 mr-2" />
                                Software makes your Profit Double if You Scale Properly.
                            </li>
                        </ul>
    
                        {/* Contact Button */}
                        <img src={signature} alt="" className='mt-20'/>
                    </div>
            </div>
          <div>
            <h1 className='text-[30.5px] italic mt-15 font-semibold'>Jio helps agencies like yours operate at a much larger scale <span className='text-orange-400'>with a vital</span> <span className='text-pink-500'>Platform to <br /> Effectively Manage</span> and grow your network</h1>
          </div>
          </div>
  )
}

export default AboutCard