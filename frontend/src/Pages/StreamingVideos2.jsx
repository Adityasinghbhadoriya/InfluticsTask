import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/AboutBanner'
import ABToggle from '../Components/AbToggle'
import StreamingVideos2_page from '../Components/StreamingVideos2_page'
import Footer from '../Components/Footer'

const StreamingVideos2 = () => {
  return (
    <div>
      <Navbar/>
      <AboutBanner title="Streaming Videos" breadcrumb="Streaming Videos"/>
      <ABToggle/>
      <StreamingVideos2_page/>
      <Footer/>
    </div>
  )
}

export default StreamingVideos2