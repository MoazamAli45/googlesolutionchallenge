import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import "./Footer.css";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Building a better world. Together!</h2>
      </div>

      <div className="footer__container-content">
        <div className="footer__content">
          <div className="footer-head">
            <h3>
              HELPING
              <span>
                <VolunteerActivismIcon />
              </span>
            </h3>
          </div>
          <p>
            Make an impact where it needed most , from any where and support
            vital humanitarian efforts
          </p>
          <div className="footer__social">
            <a href="#">
              <FacebookIcon className="fb" />
            </a>
            <a href="#">
              <LinkedInIcon className="linkedin" />
            </a>
            <a href="#">
              <TwitterIcon className="twitter" />
            </a>
          </div>
        </div>
        <div className="footer__content">
          <ul>
            <li className="footer__content-2-head">
              <h3>Quick Links</h3>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/auth">Volunteers</Link>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <ul>
            <li className="footer__content-2-head">
              <h3>Policies</h3>
            </li>
            <li>
              <a href="#">Privacy Policies</a>
            </li>

            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
