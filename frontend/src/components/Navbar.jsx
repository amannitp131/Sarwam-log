import React, { useState } from "react";
import "./Navbar.css";
import logo from '../public/truck.png'
import { BiSolidUserAccount } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <div className="logo">
      <img src={logo} style={{ height: "60px",filter: "invert(1) grayscale(1) contrast(1)" }} alt="Logo" />
        </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#about">About Us</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li>
  <Link  to="/register" style={{ fontSize: "34px" }}>
    <BiSolidUserAccount />
  </Link>
</li>
      </ul>
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
