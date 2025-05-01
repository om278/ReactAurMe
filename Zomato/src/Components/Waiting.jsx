import React from 'react'
import Wcard from './Wcard'

function Waiting() {
  return (
   <>
   <div className="h-screen w-full bg-[#FFEFF1] ">
    <h1 className='w-full text-[65px] font-bold font-sans leading-[70px] text-center pt-28 text-[#EF4F5F]'>What’s waiting for you <br />
    on the app?</h1>
    <h2 className="text-[24px] text-[#596378]  mb-14 text-center font-[300px] mt-8 leading-[32px] ">Our app is packed with features that <br /> enable you to experience food <br /> delivery like never before</h2>
   <div className="w-[70%] h-[368px] shadow m-auto grid grid-cols-3  ">
    <div className=" grid grid-cols-2 w-[80%] pl-10 mb-16 mt-[50px]">
        <Wcard cs="20px" name="Healthy" url="https://b.zmtcdn.com/data/o2_assets/d0f1639403f80f8f2c19e0d538222e661742455804.png" />
        <Wcard top="25px" cs="20px" name="Veg Mode" url="https://b.zmtcdn.com/data/o2_assets/82f145180cd6f920a8a8617dda366a0a1742455963.png" />
        <Wcard  name="Plan a Party" url="https://b.zmtcdn.com/data/o2_assets/5e7aab0f183b36fc12c29279f0cb55181742462245.png" />
        <Wcard top="25px" name="Gift Cards" url="https://b.zmtcdn.com/data/o2_assets/867f86a10503998e437963bb37c451591742455764.png" />
    </div>
    <div className="h-[100%] relative bottom-5">
    <img  src="https://b.zmtcdn.com/data/o2_assets/3f7e2757e62fd22592b879bd56b666011742294630.png" alt="" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1 "> 
            <Wcard w="150px" url="https://b.zmtcdn.com/data/o2_assets/85fa7a0c955ba0f8d894b6b68a27cdf81742978539.png" />
        </div>
    </div>
    <div className=" grid grid-cols-2 w-[80%] pl-10 mb-16 mt-[50px]">
    <Wcard cs="20px" name="Healthy" url="https://b.zmtcdn.com/data/o2_assets/d0f1639403f80f8f2c19e0d538222e661742455804.png" />
        <Wcard top="25px" cs="20px" name="Veg Mode" url="https://b.zmtcdn.com/data/o2_assets/82f145180cd6f920a8a8617dda366a0a1742455963.png" />
        <Wcard  name="Plan a Party" url="https://b.zmtcdn.com/data/o2_assets/5e7aab0f183b36fc12c29279f0cb55181742462245.png" />
        <Wcard top="25px" name="Gift Cards" url="https://b.zmtcdn.com/data/o2_assets/867f86a10503998e437963bb37c451591742455764.png" />
    </div>
   </div>
   </div>
   </>
  )
}

export default Waiting
