import React from "react";
import "./portfoPage.css";
import Earth from "../../assets/earth.png"

const Portfolio = () => {
  return (
    <>
      <div className="portfoComp">
        <div className="portfoCompHead">
          <h2>PORTFOLIO</h2>
          <h2>PORTFOLIO</h2>
        </div>
        <div className="box">
          <div className="section" alt="Rectangle">
            <div className="image">
              <div className="img_rectangle">
                <img alt="Rectangle" src={Earth} />
              </div>
              <div className="det_rectangle">
                <div className="label">
                  <div className="text-wrapper proName">AgTrader</div>
                  <div className="text-wrapper proTech">
                    Magento2, PHP, MySQL. React
                  </div>
                  <div className="text-wrapper proDet">
                    Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsumv
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
