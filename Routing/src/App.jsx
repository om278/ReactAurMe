import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About"
import Navbar from "./Navbar";
function App() {
  return (
   <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home Home="Om" Prof="Software Dev"/>}/>
        <Route path="/about" element={<About about="About Page" />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
