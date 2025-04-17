import React, { useState } from 'react'

function App() {
  // const[user , setUser]=useState('')
  // const[pass , setPass]=useState('')
  const[formdata , setFormdata]=useState({name:"",password:""})
  function handlechange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]:[e.target.value],
    })
  }
  function handleform(e) {
    e.preventDefault()
    console.log("submited", formdata);
    
  }
  return (
      <>
      <h1>Form Handling</h1>
      <form onSubmit={handleform}>
        <label htmlFor="name">
          <input type="text"
           name='name' 
           placeholder='Enter your Name'
           value={formdata.name}
           onChange={handlechange}/>
        </label>
        <label htmlFor="password">
          <input type="password"
           name='password'
            placeholder='Enter Your password'
            value={formdata.password}
            onChange={handlechange}/>
        </label>
        <input type="submit" value="submit" />
      </form>
      </>
  )
}

export default App
