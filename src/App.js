import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Hero";
import Nav from "./Nav";
import Home from "./Home/HomeLander";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/generate" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
