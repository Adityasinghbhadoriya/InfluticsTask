import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import SocialLinks from '../Components/SocialLinks'
import ReelsSection from '../Components/ReelsSection'
import Service from '../Components/Service'
import IntroSection from '../Components/IntroSection'
import UpcomingLives from '../Components/UpcomingLives'
import VideoSection from '../Components/VideoSection'
import Contactpage from '../Components/Contactpage'
import ArticleSection from '../Components/ArticleSection'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className=''>
        <Navbar/>
        <Banner/>
        <SocialLinks/>
        <ReelsSection/>
        <Service/>
        <IntroSection/>
        <UpcomingLives/>
        <VideoSection/>
        <Contactpage/>
        <ArticleSection/>
        <Footer/>
    </div>
  )
}

export default Home