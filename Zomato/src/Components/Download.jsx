import React from 'react'
import Button from './Button'

function Download() {
  return (
    <>
    <div className="h-screen w-full  mt-5 flex items-center justify-center">
        <div style={{border:"8px bold pink"}} className="h-[75%] w-[90%] bg-[#FFEFF1] rounded-3xl flex items-center justify-evenly ">
            <div className="w-[55%]  h-[100%] ">
                <h1 className='text-4xl font-bold text-center mt-[180px] mr-8 '>Download the app now!</h1>
                <p className='text-start ml-[160px] text-2xl mt-4 '>Experience seamless online ordering <br />
                only on the Zomato app</p>
                <div className=" w-[100%] h-[30%] flex items-center justify-center gap-8  m-auto">
                    
                <Button  url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0csmoRfPohYGnjjAx9REKC4E55_U1y4PU7mpn4ZJalIQmR-UJzuYPUk0X4yMMTZDCY4&usqp=CAU" />
        <Button url="https://w7.pngwing.com/pngs/822/688/png-transparent-apple-on-the-app-store-screenshot-iphone-app-store-google-play-store-electronics-text-logo-thumbnail.png" />
       
                </div>
            </div>
            <div className="w-[40%]  h-[100%] relative flex items-end justify-center">
                <img className='w-[85%] ' src="https://b.zmtcdn.com/data/o2_assets/3f7e2757e62fd22592b879bd56b666011742294630.png" alt="" />
                <h2 className='absolute top-56 text-[#596378] text-xl font-semibold text-center '>Scan the QR code to <br /> download the app</h2>
                <img className='w-[200px] absolute top-[55%] '  src="https://b.zmtcdn.com/data/o2_assets/98cc4eba0a6f59e728e5223a70fd39551742471514.png" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Download
