import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/AboutBanner'
import Blogs_page from '../Components/Blogs_page'
import Footer from '../Components/Footer'

const Blogs = () => {
  return (
    <div>
      <Navbar/>
      <AboutBanner title="Latest Blog" breadcrumb="Latest Blog"/>
      <Blogs_page/>
      <Footer/>
    </div>
  )
}

export default Blogs