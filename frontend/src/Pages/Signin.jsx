import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/AboutBanner'
import SigninPage from '../Components/SigninPage'
import Footer from '../Components/Footer'

const Signin = () => {
  return (
    <div>
        <Navbar/>
        <AboutBanner title="Log in" breadcrumb="Log in"/>
        <SigninPage/>
        <Footer/>
    </div>
  )
}

export default Signin