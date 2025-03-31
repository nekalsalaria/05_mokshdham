import React from "react";
import "../css/footer.css";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>
        Developed by Nekal Singh -{" "}
        <a id="li" href="https://linkedin.com/in/nekalsingh" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
      <p>&copy;Manoharpura Mokshdham Vikas Samiti</p>
      <div className="social-icons">
        <h1>Our Social Media Links</h1>
        <a id="fb" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a id="yt" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
