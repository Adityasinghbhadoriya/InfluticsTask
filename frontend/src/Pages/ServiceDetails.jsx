import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/AboutBanner'
import ServiceDetailsPage from '../Components/ServiceDetailsPage'
import Footer from '../Components/Footer'

const ServiceDetails = () => {
  return (
    <div>
        <Navbar/>
        <AboutBanner title = "Dance Your way to Brand Awareness" breadcrumb="Services / Dance Your way to Brand Awareness"/>
        <ServiceDetailsPage/>
        <Footer/>
    </div>
  )
}

export default ServiceDetails