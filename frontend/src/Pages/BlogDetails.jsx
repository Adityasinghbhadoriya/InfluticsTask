import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/AboutBanner'
import BlogDetailPage from '../Components/BlogDetailPage'
import Footer from '../Components/Footer'

const BlogDetails = () => {
  return (
    <div>
      <Navbar/>
      <AboutBanner title="Blog Details" breadcrumb="Blog Details"/>
      <BlogDetailPage/>
      <Footer/>
    </div>
  )
}

export default BlogDetails