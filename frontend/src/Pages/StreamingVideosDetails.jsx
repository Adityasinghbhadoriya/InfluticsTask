import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/AboutBanner'
import StreamingVideoDetails from '../Components/StreamingVideoDetails_page'
import Footer from '../Components/Footer'

const StreamingVideosDetails = () => {
  return (
    <div>
      <Navbar/>
      <AboutBanner title="Dance Your Way to Brand Awareness" breadcrumb="Dance Your Way to Brand Awareness"/>
      <StreamingVideoDetails/>
      <Footer/>
    </div>
  )
}

export default StreamingVideosDetails