import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/AboutBanner'
import SignupPage from '../Components/SignupPage'
import Footer from '../Components/Footer'

const Signup = () => {
  return (
    <div>
      <Navbar/>
      <AboutBanner title="Signup" breadcrumb="Signup"/>
      <SignupPage/>
      <Footer/>
    </div>
  )
}

export default Signup