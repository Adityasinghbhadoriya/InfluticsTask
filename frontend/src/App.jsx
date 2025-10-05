import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import StreamingVideos1 from './Pages/StreamingVideos1'
import StreamingVideos2 from './Pages/StreamingVideos2'
import StreamingVideos3 from './Pages/StreamingVideos3'
import StreamingVideosDetails from './Pages/StreamingVideosDetails'
import VideoShopDetails from './Pages/VideoShopDetails'
import Services from './Pages/Services'
import ServiceDetails from './Pages/ServiceDetails'
import Checkout from './Pages/Checkout'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import VideoShop from './Pages/VideoShop'
import Pricing from './Pages/Pricing'
import Blogs from './Pages/Blogs'
import BlogDetails from './Pages/BlogDetails'
import Contactpage from './Components/Contactpage'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/streaming-video1' element={<StreamingVideos1/>} />
        <Route path='/streaming-video2' element={<StreamingVideos2/>} />
        <Route path='/streaming-video3' element={<StreamingVideos3/>} />
        <Route path='/streaming-videos-details' element={<StreamingVideosDetails/>} />
        <Route path='/video-shop' element={<VideoShop/>} />
        <Route path='/video-shop-details' element={<VideoShopDetails/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/service-details' element={<ServiceDetails/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blog-details' element={<BlogDetails/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App