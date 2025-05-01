import React from 'react'

function Card(props) {
  return (
    <>
    <div style={{backgroundColor: props.bg, border: "1px solid pink"}} className=" w-[340px] h-[500px] bg-red-500 rounded-[40px] transform transition duration-300 hover:scale-110 ">
        <img className='w-[180px] m-auto pt-[50px]' src= {props.url} alt="" />
        <h1 className='text-3xl font-bold text-center mb-5 mt-10'>{props.name}</h1>
        <p className=' w-44 m-auto text-l font-semibold text-center mb-5 text-[#596378]'>{props.para}</p>
        <h3 className='text-xl font-semibold text-center'>Check it out</h3>
    </div>
    </>
  )
}

export default Card
