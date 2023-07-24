import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import projectData from '../projectData';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";

import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio projectData={projectData}/>} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
