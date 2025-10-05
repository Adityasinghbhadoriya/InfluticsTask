import React from 'react'
import ContactMainPage from '../Components/ContactMainPage'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/AboutBanner'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <AboutBanner title="Contact me" breadcrumb="Contact me"/>
      <ContactMainPage/>
      <Footer/>
    </div>
  )
}

export default Contact