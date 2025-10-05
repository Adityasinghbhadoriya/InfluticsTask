import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/AboutBanner'
import PricingPage from '../Components/PricingPage'
import Footer from '../Components/Footer'

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <AboutBanner title="Pricing Plan" breadcrumb="Pricing Plan" />
        <PricingPage/>
        <Footer/>
    </div>
  )
}

export default Pricing