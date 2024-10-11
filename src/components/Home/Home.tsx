import React from 'react'
import ResponsiveNavbar from './Navbar/ResponsiveNavbar'
import Hero from './Hero/Hero'
import HomeFilterbar from './HomeFilterbar/HomeFilterbar'
import DoctorsList from './DoctorsList/DoctorsList'

const HomePage = () => {
  return (
    <div className='bg-white'>
      <ResponsiveNavbar/>
      <div className=' lg:px-32 px-4'>
      <Hero/>
      <HomeFilterbar/>
      </div>
      <div className='lg:px-32 px-4'>
        <h1 className='text-2xl font-normal mt-12 mb-8'>Popular Doctors</h1>
       <DoctorsList/>
       </div>
    </div>
  )
}

export default HomePage
