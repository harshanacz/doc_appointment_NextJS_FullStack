import React from 'react'
import ResponsiveNavbar from './Navbar/ResponsiveNavbar'
import Hero from './Hero/Hero'
import HomeFilterbar from './HomeFilterbar/HomeFilterbar'

const HomePage = () => {
  return (
    <div className='bg-white'>
      <ResponsiveNavbar/>
      <div className=' lg:px-32 px-4'>
      <Hero/>
      <HomeFilterbar/>
      </div>
      <div className='lg:px-32 px-4'>
        <h1 className='text-3xl font-bold mt-8'>Popular Doctors</h1>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4'>
          <div className='bg-white shadow-md rounded-md p-4'>
            <div className='w-full h-40 bg-gray-300 rounded-md'></div>
            <h1 className='text-lg font-semibold mt-4'>Dr. John Doe</h1>
            <p className='text-sm text-gray-500'>Cardiologist</p>
          </div>
          <div className='bg-white shadow-md rounded-md p-4'>
            <div className='w-full h-40 bg-gray-300 rounded-md'></div>
            <h1 className='text-lg font-semibold mt-4'>Dr. John Doe</h1>
            <p className='text-sm text-gray-500'>Cardiologist</p>
          </div>
          <div className='bg-white shadow-md rounded-md p-4'>
            <div className='w-full h-40 bg-gray-300 rounded-md'></div>
            <h1 className='text-lg font-semibold mt-4'>Dr. John Doe</h1>
            <p className='text-sm text-gray-500'>Cardiologist</p>
          </div>
          <div className='bg-white shadow-md rounded-md p-4'>
            <div className='w-full h-40 bg-gray-300 rounded-md'></div>
            <h1 className='text-lg font-semibold mt-4'>Dr. John Doe</h1>
            <p className='text-sm text-gray-500'>Cardiologist</p>
          </div>
        </div></div>
    </div>
  )
}

export default HomePage
