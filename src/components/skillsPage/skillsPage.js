import React from "react";
import "./skillsPage.css";
import { SKILLS } from "../../Constants";

const Skills = () => {

  return (
    <>
      <div className="skillsComp">
        <h1>
          <span>S</span>
          <span>K</span>
          <span>I</span>
          <span>L</span>
          <span>L</span>
          <span>S</span>
        </h1>
        <div className="skillSection">
          {SKILLS.map((skill, index) => (
            <h2 className="skill_name" key={index}>
              {skill}
            </h2>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
