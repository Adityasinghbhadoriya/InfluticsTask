import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/AboutBanner'
import Checkoutpage from '../Components/Checkoutpage'
import Footer from '../Components/Footer'

const Checkout = () => {
  return (
    <div>
        <Navbar/>
        <AboutBanner title="Checkout" breadcrumb="Checkout"/>
        <Checkoutpage/>
        <Footer/>
    </div>
  )
}

export default Checkout