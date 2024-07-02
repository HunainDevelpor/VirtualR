import React, { useEffect } from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Hero() {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <>
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
    <h1 data-aos="fade-up" className='text-4xl sm:text-6xl lg:text-8xl text-center tracking-tight'>VirtualR build tools <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>  for developers  </span> </h1>
    <p data-aos="fade-down-right"  className='mt-10 text-lg text-center max-w-4xl text-neutral-500'>Empower your creativity and bring your VR app ideas to life with our intuitive development tools.
    Get started today and turn your imagination into immersive reality</p>
    <div data-aos="fade-down-right"  className='flex justify-center my-10'>
      <a className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3  rounded-md ' href="#">Start for free</a>
      <a className='border  py-3 px-4 mx-3  rounded-md ' href="#">Documentation</a></div>
      <div className='mt-8  flex justify-center'>
        <video className='border my-4 w-1/2 border-orange-700 shadow-orange-400 mx-2 rounded-lg' src={video1} muted autoPlay loop>
        <source data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" src={video1} type='video/mp4'/>
        Your browser does not support the video tag
        </video>
        <video className='border my-4 w-1/2 border-orange-700 shadow-orange-400 mx-2 rounded-lg' src={video2} muted autoPlay loop>
        <source src={video2} type='video/mp4'/>
        Your browser does not support the video tag
        </video>

      </div>
    </div>
    
    </>
  )
}

export default Hero