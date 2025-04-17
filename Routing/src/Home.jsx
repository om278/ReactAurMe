import React from 'react'
import "./Home.css"
function Home(props) {
  return (
    <>
    
<div className="hero-image">
  <img src="https://images.unsplash.com/photo-1741851374430-d242e0dcd70c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="" />
  <div className="hero-text">
    <h1 >I am {props.Home}</h1>
    <p>And I'm a {props.Prof}</p>
    
  </div>
</div>
    </>
  )
}

export default Home
