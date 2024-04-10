import React from "react";
import "./NavigationBar.css";
import Logo from "../../logo.svg";
import GTM from "../../assets/gtm.svg"

const NavigationBar = () => {
  const handleClickHome = () => {
    window.location.reload();
  }

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(shareUrl);
  //   setCopySuccessState("Link Copied!");
  //   setTimeout(() => {
  //     setCopySuccessState("");
  //   }, 1000);
  // };
  // const handleEmailClick = () => {
  //   const subject = encodeURIComponent(
  //     `Check out this product!`
  //   );

  //   const shareUrl = "https://integration-5ojmyuq-giqgb4t5y6flc.ap-3.magentosite.cloud/item/cropping/chemical-products/alburynsw--australia/sl07201630-2121689851034649";
  //   // ${ from == "clearing_sales" ? "clearing sale" : "product"}

  //   const body = encodeURIComponent(
  //     `Take a look at this - ABCD \n ${shareUrl}`
  //   );
  //   // <a href="${shareUrl}">${shareUrl}</a>
  //   // URL: https://example.com'
  //   window.location.href = `mailto:?subject=${subject}&body=${body}`;
  // };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#home" onClick={handleClickHome}>
          <img src={GTM} alt="LOGO" />
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
