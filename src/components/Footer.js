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
          <div className="follow-group">
            <div className="follow-item">
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
            </div>
            <div className="follow-item">
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
            </div>
            <div className="follow-item">
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
            </div>
            <div className="follow-item">
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
            </div>
            <div className="follow-item">
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
            </div>
            <div className="follow-item">
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
            </div>
            <div className="follow-item">
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
            </div>
          </div>
          <div className="footer-copyright">
            <p>
              &copy; 2020 BENKIH | Designed by: Peter Ihimire | Powered by:
              React.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
