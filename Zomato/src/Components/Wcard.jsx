import React from 'react'

function Wcard(props) {
  return (
    <>
        <div style={{marginLeft: props.cs ,marginBottom: props.top ,width: props.w}} className="w-[110px] h-[130px] rounded-lg  bg-white  pt-5 shadow-xl m-auto">
            <img src={props.url} alt="" />
            <h1 className='text-center'>{props.name}</h1>
        </div>
    </>
  )
}

export default Wcard
