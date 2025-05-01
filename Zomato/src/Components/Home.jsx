import React from 'react'
import Button from './Button'

function Home() {
  return (
    <div className='h-screen overflow-y-hidden relative '>
       <video className='w-full opacity-98' autoPlay muted loop>
        <source src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4" type="video/mp4" />
      </video>
      <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] '>
        <h1 className='font-sans text-[70px]  text-center font-extrabold text-white italic'>zomato</h1>
        <h2 className='text-white font-sans text-7xl font-bold text-center mb-8'>India’s #1 <br />
        food delivery app</h2>
        <h3 className= 'mb-8 text-white text-[26px] font-semibold text-center'>Experience fast & easy online ordering <br />
        on the Zomato app</h3>
        <div className=' flex justify-center gap-8'>
        <Button  url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0csmoRfPohYGnjjAx9REKC4E55_U1y4PU7mpn4ZJalIQmR-UJzuYPUk0X4yMMTZDCY4&usqp=CAU" />
        <Button url="https://w7.pngwing.com/pngs/822/688/png-transparent-apple-on-the-app-store-screenshot-iphone-app-store-google-play-store-electronics-text-logo-thumbnail.png" />
        </div>
        
      </div>
    </div>
  )
}

export default Home
