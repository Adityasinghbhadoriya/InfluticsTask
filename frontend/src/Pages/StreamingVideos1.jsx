import React from 'react'
import AboutBanner from '../Components/AboutBanner'
import Navbar from '../Components/Navbar'
import ABToggle from '../Components/AbToggle'
import StreamingVideos1_page from '../Components/StreamingVideos1_page'
import Footer from '../Components/Footer'

const StreamingVideos1 = () => {
  return (
    <div>
        <Navbar/>
        <AboutBanner title="Streaming Videos" breadcrumb="Streaming Videos" />
        <ABToggle/>
        <StreamingVideos1_page/>
        <Footer/>
    </div>
  )
}

export default StreamingVideos1