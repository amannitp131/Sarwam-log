import React from "react";
import "./Hero.css"; 
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title"> Track Your shipment</h1>
          <p className="hero-subtitle">Find Exact location here</p>
          <div className="hero-form">
            <input
              type="text"
              placeholder="Tracking Number"
              className="hero-input"
            />
            <button className="hero-button">Track <MdKeyboardDoubleArrowRight/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
