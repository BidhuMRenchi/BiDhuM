import React, { useState } from "react";
import "./overlaySlides.scss";

const SideNav = () => {
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  return (
    <>
      <div class="overlay_sides overlay_sides_right">
        <nav class="nav__wrapper">
          <ul id="side_nav">
            <li
              data-menuanchor="home"
              className={activeItem === 0 ? "active" : ""}
              onClick={() => handleItemClick(0)}
            >
              <a href="#home" title="home">
                00
              </a>
            </li>
            <li
              data-menuanchor="about"
              className={activeItem === 1 ? "active" : ""}
              onClick={() => handleItemClick(1)}
            >
              <a href="#skills" title="about">
                01
              </a>
            </li>
            <li
              data-menuanchor="skills"
              className={activeItem === 2 ? "active" : ""}
              onClick={() => handleItemClick(2)}
            >
              <a href="#portfolio" title="skills">
                02
              </a>
            </li>
            <li
              data-menuanchor="portfolio"
              className={activeItem === 3 ? "active" : ""}
              onClick={() => handleItemClick(3)}
            >
              <a href="#contact" title="portfolio">
                03
              </a>
            </li>
            {/* <li
              data-menuanchor="contact"
              className={activeItem === 4 ? "active" : ""}
              onClick={() => handleItemClick(4)}
            >
              <a href="#about" title="contact">
                04
              </a>
            </li> */}
            <div class="line"></div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideNav;
