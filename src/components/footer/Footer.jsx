import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        AJIT KUMAR
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://facebook.com/ajkumarray"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com/ajkumarray"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/ajkumarray"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; AJIT KUMAR All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
