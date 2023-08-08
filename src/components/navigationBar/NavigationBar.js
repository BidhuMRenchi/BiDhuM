import React from "react";
import "./NavigationBar.css";
import Logo from "../../logo.svg";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="/">
          <img src={Logo} alt="LOGO" />
        </a>
      </div>
      <div className="nav-list">
        <ul className="navbar-list">
          <li className="hamburger">
            <a href="/">
              <div className="bar"></div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
