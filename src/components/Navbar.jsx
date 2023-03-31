import React from "react";
import {
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Button,
  Menu,
  MenuItem,
  Drawer,
} from "@mui/material";
import { IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbar__head">
            <h3>
              HELPING
              <span>
                <VolunteerActivismIcon />
              </span>
            </h3>
          </div>
          <div className="navbar__content">
            <ul className="navbar__link">
              <li className="navbar-li">
                <Link to="/home">Home</Link>
              </li>
              <li className="navbar-li">
                <Link to="/about">About us</Link>
              </li>
              <li className="navbar-li">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="navbar-li">
                <Link to="/auth">Volunteers</Link>
              </li>
            </ul>
            <div className="navbar__content__btn">
              <button className="navbar__content__btn__login">
                <Link to="/auth">Login</Link>
              </button>
            </div>
          </div>
          <div className="navbar__mobile">
            <IconButton
              size="large"
              aria-label="menu"
              onClick={() => setIsDrawerOpen(true)}
              sx={{
                display: {
                  sm: "block",
                  md: "none",
                },
                color: "#14183e",
              }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </nav>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{
          width: {
            sm: "200px",
          },
        }}
      >
        <div className="navbar__drawer">
          <div className="close-icon">
            <IconButton
              size="large"
              aria-label="menu"
              onClick={() => setIsDrawerOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="navbar__head">
            <h3>
              HELPING
              <span>
                <VolunteerActivismIcon />
              </span>
            </h3>
          </div>
          <ul className="navbar__link">
            <li className="navbar-li">
              <Link to="/home">Home</Link>
            </li>
            <li className="navbar-li">
              <Link to="/about">About us</Link>
            </li>
            <li className="navbar-li">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="navbar-li">
              <Link to="/auth">Volunteers</Link>
            </li>
          </ul>
          <div className="navbar__content__btn">
            <button className=" navbar__content__btn__login">
              <Link to="/auth">Login</Link>
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
