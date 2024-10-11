import React from 'react'
import ResponsiveNavbar from './Navbar/ResponsiveNavbar'
import Hero from './Hero/Hero'

const HomePage = () => {
  return (
    <div className='bg-white'>
      <ResponsiveNavbar/>
      <div className=' lg:px-32 px-4'>
      <Hero/>
      </div>
      
    </div>
  )
}

export default HomePage
