import React from "react";
import { AuthProvider } from "./AuthContext";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <AuthProvider>
      <Login />
      <Dashboard />
    </AuthProvider>
  );
}

export default App;
