import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/AboutBanner'
import ServicesPage from '../Components/ServicesPage'
import Footer from '../Components/Footer'

const Services = () => {
  return (
    <div>
        <Navbar/>
        <AboutBanner title="My Services" breadcrumb="Services"/>
        <ServicesPage/>
        <Footer/>
    </div>
  )
}

export default Services