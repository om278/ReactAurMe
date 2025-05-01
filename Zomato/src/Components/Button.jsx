import React from 'react'

function Button(props) {
  return (
   <>
   <div className='flex bg-black  w-[200px] rounded-lg border-white h-[65px]'>
        <img className='h-[100%] w-[100%] rounded-lg' src={props.url} alt="" />
    
   
   </div>
   </>
  )
}

export default Button
