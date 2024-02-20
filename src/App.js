import React, { useState } from "react";
// eslint-disable-next-line
import About from "./components/aboutPage/aboutPage";
import Skills from "./components/skillsPage/skillsPage";
import Portfolio from "./components/portfoPage/portfoPage";
import Logo from "./components/logo/logo";
import Star from "./assets/star.svg";
import NavigationBar from "./components/navigationBar/NavigationBar";
import SideNav from "./components/sideNavigation/sideNav";
import "./App.css";

const App = () => {
  const [name, setName] = useState("Bidhu M Renchi");
  const [originalName] = useState("Jessica Jayson");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(0);
  const navlinks = document.querySelectorAll('li');
  const mouseStyle = {
    top: cursorPosition.y,
    left: cursorPosition.x,
  };

  navlinks.forEach(link => {
    link.addEventListener("mouseleave", () => {
      link.classList.remove("hovered_link");
      // console.log("When Hovered over Link : ", link.classList);
    });
    link.addEventListener("mouseover", () => {
      link.classList.add("hovered_link");
      // console.log("When Hovered out of Link : ", link.classList);
    });
  });
  
  const cursor = (e) => {
    // console.log(navlinks);
    setCursorPosition({ x: e.pageX, y: e.pageY });
  };

  window.addEventListener('mousemove', cursor);
  const handleButtonClick = () => {
    const newName = name === originalName ? "Bidhu M Renchi" : originalName;
    setName(newName);
  };

  return (
    <>
      <NavigationBar />
      <div className="container">
        <div className="cursor" style={mouseStyle}></div>
        <section className="home" id="home">
          <div className="one animate__slideInDown">
            <div className="section main-body" id="navOne">
              <div className="main-body-one">
                <div className="nameAnim">
                  <Logo />
                  {/* {name === "Bidhu M Renchi" ? <Logo /> : <LogoJes />} */}
                </div>
                <a href="#portfolio">
                  <button className="btn_light" onClick={handleButtonClick}>
                    View My Work
                  </button>
                </a>
              </div>
              <div className="computer-graphic">
                <img src={Star} alt="starImage"></img>
              </div>
              <SideNav />
            </div>
          </div>
        </section>
        {/* <section className="about page" id="about">
          <div className="section">
            <About />
          </div>
        </section> */}
        <section className="skills page" id="skills">
          <div className="section">
            <Skills />
          </div>
        </section>
        <section className="portfolio page" id="portfolio">
          <div className="section">
            <Portfolio />
          </div>
        </section>
        <section className="contact page" id="contact">
          <div className="section">
            <h1>CONTACT US</h1>
          </div>
        </section>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
    </>
  );
};

export default App;
