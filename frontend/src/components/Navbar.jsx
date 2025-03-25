import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/mokshdhamlogo.webp";
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
          <ul className="submenu">
            <li><Link to="/about/mission">Mission</Link></li>
            <li><Link to="/about/vision">Vision</Link></li>
            <li><Link to="/about/objective">Objective</Link></li>
            <li><Link to="/about/certificates">Certificates</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <Link to="/membership">Membership</Link>
          <ul className="submenu">
            <li><Link to="/membership/fee">Membership Fee</Link></li>
            <li><Link to="/membership/become-member">Become a Member</Link></li>
          </ul>
        </li>

        <li><Link to="/executive-members">Executive Members</Link></li>
        <li><Link to="/media">Media Coverage</Link></li>

        <li className="dropdown">
          <Link to="/events">Events</Link>
          <ul className="submenu">
            <li><Link to="/events/upcoming">Upcoming Events</Link></li>
            <li><Link to="/events/past">Past Events</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <Link to="/gallery">Gallery</Link>
          <ul className="submenu">
            <li><Link to="/gallery/photos">Photos</Link></li>
            <li><Link to="/gallery/videos">Videos</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <Link to="/contact">Contact</Link>
          <ul className="submenu">
            <li><Link to="/contact/location">Location</Link></li>
            <li><Link to="/contact/faq">FAQ</Link></li>
            <li><Link to="/contact/support">Support</Link></li>
          </ul>
        </li>
      </ul>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
