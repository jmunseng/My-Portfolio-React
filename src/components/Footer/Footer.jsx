import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Leong Jeong
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://imstagram.com">
          <FiInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Leon Jeong. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
