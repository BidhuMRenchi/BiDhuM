import React from "react";
import {BIO} from "../../Constants";
import "./aboutPage.css"
// import { ReactComponent as LOP } from "../../assets/HD_Logo_WHITE.svg"
const About = () => {
  return (
    <>
      <div className="aboutComp">
        <h1>ABOUT</h1>
        <div className="bioOne">
          <p className="bio">{BIO}.</p>
        </div>
      </div>
    </>
  );
};

export default About;
