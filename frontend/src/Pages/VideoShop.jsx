import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/AboutBanner'
import VideoShopPage from '../Components/VideoShopPage'
import Footer from '../Components/Footer'

const VideoShop = () => {
  return (
    <div>
        <Navbar/>
        <AboutBanner title="Single Video Shop" breadcrumb="Single Video Shop" />
        <VideoShopPage/>
        <Footer/>
    </div>
  )
}

export default VideoShop