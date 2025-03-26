import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/mokshdhamlogo.enc.jpg";
import "../css/navbar.css";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => setIsMobile(!isMobile);

  return (
    <nav className="navbar">
      <img src={logo} alt="Mokshdham Logo" />
      <h1 className="logo">Mokshdham</h1>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><Link to="/">Home</Link></li>

        <li className="dropdown">
          <Link to="/about">About Us</Link>
        </li>

        <li className="dropdown">
          <Link to="/membership">Membership</Link>
        </li>

        <li><Link to="/executive-members">Executive Committee</Link></li>
        <li><Link to="/media">Media Coverage</Link></li>

        <li className="dropdown">
          <Link to="/events">Events</Link>
        </li>

        <li className="dropdown">
          <Link to="/gallery">Gallery</Link>
        </li>

        <li className="dropdown">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
