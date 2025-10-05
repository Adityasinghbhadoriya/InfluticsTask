import React from 'react'
import AboutBanner from '../Components/AboutBanner'
import Navbar from '../Components/Navbar'
import StreamingVideos3_page from '../Components/StreamingVideos3_page'
import Footer from '../Components/Footer'

const StreamingVideos3 = () => {
  return (
    <div>
      <Navbar/>
      <AboutBanner title="Streaming Videos" breadcrumb="Streaming Videos"/>
      <StreamingVideos3_page/>
      <Footer/>
    </div>
  )
}

export default StreamingVideos3