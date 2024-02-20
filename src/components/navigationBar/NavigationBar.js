import React from "react";
import "./NavigationBar.css";
import Logo from "../../logo.svg";

const NavigationBar = () => {
  const handleClickHome = () => {
    window.location.reload();
  }
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#home" onClick={handleClickHome}>
          <img src={Logo} alt="LOGO" />
        </a>
      </div>
      <div className="nav-list">
        <ul className="navbar-list">
          <li className="hamburger">
            <a href="#home" onClick={handleClickHome}>
              <div className="bar"></div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
