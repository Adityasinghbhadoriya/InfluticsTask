import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/AboutBanner'
import VideoSection from '../Components/VideoSection'
import AboutCard from '../Components/AboutCard'
import Contactpage from '../Components/Contactpage'
import ArticleSection from '../Components/ArticleSection'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div className='relative'>
        <Navbar/>
        <AboutBanner title="Aboute Me" breadcrumb="About" />
        <AboutCard/>
        <VideoSection/>
        <Contactpage/>
        <ArticleSection/>
        <Footer/>
    </div>
  )
}

export default About