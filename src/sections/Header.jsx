import React from "react";
import Navbar from "../components/Navbar";

import "./Header.css";
import pic from "../assets/donate.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <Navbar />
        <div className="header__container">
          <div className="header__container-content">
            <div className="header__content-1">
              <h1>Connect with causes you care about</h1>
              <p>
                Make an impact where it needed most , from any where and support
                vital humanitarian efforts
              </p>
              <button className="header__content-btn">
                <Link to="/auth">Donate Now </Link>
              </button>
            </div>
            <div className="header__content__image">
              <img src={pic} alt="donate" />
            </div>
          </div>
        </div>
      </div>
      <div className="header__color"></div>
    </div>
  );
};

export default Header;
