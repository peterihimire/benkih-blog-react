import React from "react";
import logo from "../images/peter-logo-alt.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-center">
        <div className="footer-content">
          <img src={logo} alt="peters logo" className="peter-logo-alt" />

          <ul className="follow-group">
            <li className="follow-item">
              <div className="follow-icon-container-1">
                <a
                  href="https://facebook.com/ihimirepeter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </div>
            </li>
            <li className="follow-item">
              <div className="follow-icon-container-2">
                <a
                  href="https://twitter.com/ptechanalysis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
            </li>
            <li className="follow-item">
              <div className="follow-icon-container-3">
                <a
                  href="https://instagram.com/peterihimire"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </li>
          </ul>

          <p>&copy; Peter Ihimire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
