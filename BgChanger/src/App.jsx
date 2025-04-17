import React, { useState } from 'react'
import './App.css'
function App() {
 const [Color, SetColor]= useState('')
  return (
    <div className='new ' style={{ backgroundColor: Color }}    >
      <div className='btn'>
        <button style={{ backgroundColor: "red" }} onClick={()=>{
          SetColor("red")
        }} >Red</button>
         <button style={{ backgroundColor: "green" }} onClick={()=>{
          SetColor("Green")
        }} >Green</button>
         <button style={{ backgroundColor: "blue" }} onClick={()=>{
          SetColor("blue")
        }} >Blue</button>
        <button style={{ backgroundColor: "pink" }} onClick={()=>{
          SetColor("pink")
        }} >Pink</button>
        <button style={{ backgroundColor: "white" }} onClick={()=>{
          SetColor("white")
        }} >White</button>
        <button style={{ backgroundColor: "black", color:"white"}} onClick={()=>{
          SetColor("black")
        }} >Black</button>
        <button style={{ backgroundColor: "orange" }} onClick={()=>{
          SetColor("orange")
        }} >Orange</button>
        <button style={{ backgroundColor: "yellow" }} onClick={()=>{
          SetColor("yellow")
        }} >Yellow</button>
        <button style={{ backgroundColor: "salmon" }} onClick={()=>{
          SetColor("salmon")
        }} >Salmon</button>
      </div>
    </div>
  )
}

export default App
