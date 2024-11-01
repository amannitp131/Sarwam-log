import React from "react";
import "./About.css";
import { FaRocket } from "react-icons/fa"; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-icon">
          <FaRocket />
        </div>
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
        We specialize in delivering comprehensive logistics solutions that connect businesses with top-tier logistics providers seamlessly. Our mission is to simplify and streamline the logistics process, ensuring that your shipments are managed with precision and efficiency.
        </p>
      </div>
    </section>
  );
};

export default About;
