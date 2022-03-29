import React from "react";
import netflix from "../../Assets/Netflix Logo.svg";
import shopify from "../../Assets/Shopify Logo.svg";
import walmart from "../../Assets/Walmart Logo.svg";
import spotify from "../../Assets/Spotify Logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <p>Trusted by 3+ million at companies like</p>
      <div className="logo-img">
        <img src={netflix} alt="" />
        <img src={shopify} alt="" />
        <img src={spotify} alt="" />
        <img src={walmart} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
