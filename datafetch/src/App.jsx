import React, { useEffect, useState } from 'react'

function App() {
  const [user , setUser]=useState([])
  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((responce)=>responce.json())
    .then((data)=>setUser(data))
    .catch((error)=>console.error("error Something", error));
    
    console.log("page rendured");
    
  },[])
  return (
    <div>
       <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
