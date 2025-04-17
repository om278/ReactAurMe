import React, { useState } from 'react'

export default function App() {
  const [counter, setcounter]=useState(0)
  return (
   <>
   <h1>{counter}</h1>
   <button onClick={()=>{
    setcounter(counter+1)
    if (counter==20) {
      setcounter(20)
    }
   }}>Increse</button>
   <button onClick={()=>{
    setcounter(counter-1)
    if (counter==0) {
      setcounter(0)
    }
   }}>Decrese</button>
   </>
  )
}
