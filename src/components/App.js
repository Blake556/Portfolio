import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Skills from "./Skills";
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
          <Route path="/Home" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
