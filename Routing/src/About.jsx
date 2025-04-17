import React from 'react'
import "./About.css"
function About(props) {
  return (
   <>
   <div>
    <img src="https://images.unsplash.com/photo-1741230297079-55b8133ab5ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <h1 className='text'>Aa Gaye sir{props.about} pr</h1>
   </div>
   </>
  )
}

export default About
