import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Feature from './Components/Feature'
import Featuresection from './Components/Featuresection'
import Price from './Components/Price'
import Feedback from './Components/Feedback'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
    <Navbar/>
<div className='pt-20 px-6 mx-auto max-w-7xl'>
 <Hero/>
<Feature/>

  <Featuresection/>
  <Price/>
  <Feedback/>
  <Footer/>

</div>

    </>
  )
}
