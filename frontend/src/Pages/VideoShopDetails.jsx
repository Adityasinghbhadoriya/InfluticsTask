import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/AboutBanner'
import VideoSectionPage from '../Components/VideoSectionPage'
import Footer from '../Components/Footer'

const VideoShopDetails = () => {
  return (
    <div>
        <Navbar/>
        <AboutBanner title="Video Details" breadcrumb="Video Details"/>
        <VideoSectionPage/>
        <Footer/>
    </div>
  )
}

export default VideoShopDetails