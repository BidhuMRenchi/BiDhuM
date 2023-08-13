import React, { useEffect, useState } from "react";
import "./portfoPage.css";
import Earth from "../../assets/earth.png";
import { useQuery } from "@apollo/client";
import PORTFOLIO_QUERY from "../../modules/Portfolio/apollo/queries";

const Portfolio = () => {
  const { data, loading, error } = useQuery(PORTFOLIO_QUERY);
  const [name, setName] = useState(data?.portfolioApis[0].name || "BiDhuM"); //data.portfolioApis[0].name
  const [tech, setTech] = useState(data?.portfolioApis[0].tech || "Tech"); //data.portfolioApis[0].tech
  const [desc, setDesc] = useState(
    data?.portfolioApis[0].description || "Description"
  ); //data.portfolioApis[0].description
  const [counter, setCounter] = useState(0);

  setTimeout(() => {
    try {
      console.log("Time Out Function : ", data.portfolioApis[counter].name);
      setName(data.portfolioApis[counter].name);
      setTech(data.portfolioApis[counter].tech);
      setDesc(data.portfolioApis[counter].description);
    } catch (e) {
      console.log("TIMEOUT ERROR LOG : ", e);
    }
  }, 0);

  useEffect(() => {
    if (!loading && !error) {
      console.log("PROJECT NAME : ", data.portfolioApis[0].name);
      console.log("PROJECT TECH : ", data.portfolioApis[0].tech);
      console.log("PROJECT DESC : ", data.portfolioApis[0].description);
    } else {
      console.log(
        "Error in loading projects... due to unforeseen issues : ",
        data
      );
    }
  }, [data, error, loading]);

  const handleRClick = () => {
    if (counter === 2) {
      console.log("No More Projects to RIGHT as of Now.");
    } else {
      setCounter(counter + 1);
      setName(data.portfolioApis[counter].name);
      setTech(data.portfolioApis[counter].tech);
      setDesc(data.portfolioApis[counter].description);
    }
  };

  const handleLClick = () => {
    if (counter === 0) {
      console.log("No More Projects to LEFT as of Now.");
    } else {
      setCounter(counter - 1);
      setName(data.portfolioApis[counter].name);
      setTech(data.portfolioApis[counter].tech);
      setDesc(data.portfolioApis[counter].description);
    }
  };

  return (
    <>
      <div className="portfoComp">
        <div className="portfoCompHead">
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
        </div>
        <div className="box">
          <button className="rbutton" onClick={handleLClick}>
            <svg
              width="22"
              height="54"
              viewBox="0 0 22 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0777992 26.481L19.3818 53.5938L21.2485 0.799248L0.0777992 26.481Z"
                fill="#aaaaaa"
                opacity={0.3}
                className={`transparent_paths ${
                  counter === 0 ? "transparent_path" : ""
                }`}
              />
            </svg>
          </button>
          <button className="lbutton" onClick={handleRClick}>
            <svg
              width="22"
              height="53"
              viewBox="0 0 22 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="l_but"
            >
              <path
                d="M21.1312 26.6161L0.995235 0.115281L0.767555 52.9423L21.1312 26.6161Z"
                fill="#aaaaaa"
                className={`transparent_paths ${
                  counter === 2 ? "transparent_path" : ""
                }`}
              />
            </svg>
          </button>
          {console.log(counter)}
          <div className="section" alt="Rectangle">
            <div className="image">
              <div className="img_rectangle">
                <img alt="Rectangle" src={Earth} />
              </div>
              {loading ? (
                <p>Loading Authors...</p>
              ) : error ? (
                <p>There was an issue loading the data...</p>
              ) : (
                <div className="det_rectangle">
                  <div className="label">
                    <div className="text-wrapper proName">{name}</div>
                    <div className="text-wrapper proTech">{tech}</div>
                    <div className="text-wrapper proDet">{desc}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
