import React, { useContext } from "react";
import AuthContext from "./AuthContext";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <>
          <p>Welcome back, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please login to see your dashboard.</p>
      )}
    </div>
  );
}

export default Dashboard;
