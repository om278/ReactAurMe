import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import './App.css'
function Login() {
  const [username, setUsername] = useState("");
  const { login, user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  };

  return (
    <div>
      
      {user ? (<div>
        <h2>Login</h2>
        <p>You are logged in as {user.name}</p>
        </div>
      ) : (
        <div className="container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
