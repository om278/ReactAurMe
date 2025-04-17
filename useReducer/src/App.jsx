import React from 'react'
import { useReducer } from 'react'
import "./App.css"
function App() {

  const[count , dispatch]=useReducer((state , action)=>{
   if (action.type==="increment") {
    return state+1;
   }
   if (action.type==="decrement") {
    return state-1;
   }
   if (action.type==="reset") {
    return state=0;
   }
    
  },0)


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch({type:"increment"})}}>Increment</button>
      <button onClick={()=>{dispatch({type:"decrement"})}}>Decrement</button>
      <button onClick={()=>{dispatch({type:"reset"})}}>Reset</button>
    </div>
  )
}

export default App
