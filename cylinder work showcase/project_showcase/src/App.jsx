// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import CanvasAndHorizontalLine from "./CanvasAndHorizontalLine";
import "./style.css";
import AboutMe from "./Aboutme";
import Menu from "./Menu";
import Home from "./Home";
import Work from "./Work";
import ContactSection from "./ContactSection";
import Preloader from './Preloader';

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Function to handle finishing the preloader animation
  const handlePreloaderFinish = () => {
    setLoading(false);
  }

  return (
    <>
    
      {/* Menu is always rendered */}
      <Menu />

      {/* Only render CanvasAndHorizontalLine on the home route */}
      {location.pathname === "/" && <CanvasAndHorizontalLine />}

      {/* Routes for different sections */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>

      {/* Conditionally render the Preloader */}
      {loading && <Preloader onFinish={handlePreloaderFinish} />}
      
    </>
  );
};

// Wrap the App component with Router for routing to work
export default () => (
  <Router>
    <App />
  </Router>
);
