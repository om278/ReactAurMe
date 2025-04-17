import React, { useRef } from 'react'

function App() {
  const newRef=useRef()
  return (
    <div>
      <h1 ref={newRef}>Hello its me</h1>
      <button onClick={()=>{newRef.current.innerText="Jaadu Ho Gaya bhai...."
        newRef.current.style.color="red"}}>clickForMagic</button>
    </div>
  )
}

export default App
