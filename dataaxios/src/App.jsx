import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  const [posts , setPost]=useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((responce)=>setPost(responce.data))
    .catch((error)=>console.error("error Something", error));
    
  })
  return (
    <div>
      <h1>Hello its axios</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}><strong>{post.title}</strong></li>
        ))}
      </ul>
    </div>
  )
}

export default App
