import React from "react";
import "../css/footer.css";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>&copy;Manoharpura Mokshdham Vikas Samiti</p>
      <p>
        Developed by Nekal Singh -{" "}
        <a href="https://linkedin.com/in/nekalsingh" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
      <div className="social-icons">
        <h1>Our Social Media Links</h1>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
