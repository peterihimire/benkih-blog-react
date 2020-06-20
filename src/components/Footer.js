import React from "react";
// import logo from "../images/peter-logo-alt.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaGithub,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-center">
        <div className="footer-content">
          {/* <img src={logo} alt="peters logo" className="peter-logo-alt" /> */}

          <ul className="follow-group">
            <li className="follow-item">
              <div className="follow-icon-container-1">
                <a
                  href="https://facebook.com/ihimirepeter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaFacebookF />{" "}
                  </span>{" "}
                  facebook
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
                  <span>
                    <FaTwitter />{" "}
                  </span>{" "}
                  twitter
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
                  <span>
                    <FaInstagram />{" "}
                  </span>{" "}
                  instagram
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
                  <span>
                    <FaLinkedinIn />{" "}
                  </span>{" "}
                  linkedin
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
                  <span>
                    <FaDribbble />{" "}
                  </span>{" "}
                  dribble
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
                  <span>
                    <FaGithub />{" "}
                  </span>{" "}
                  github
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
                  <span>
                    <FaYoutube />{" "}
                  </span>{" "}
                  youtube
                </a>
              </div>
            </li>
          </ul>
          <div className="footer-copyright">
            <p>
              BENKIH | Designed by Peter Ihimire | &copy; Copyright All right
              reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
