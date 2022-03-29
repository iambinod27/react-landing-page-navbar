import React from "react";
import hero from "../../Assets/Hero Image.png";
import alternate from "../../Assets/AlternativeTo Logo.svg";
import capterra from "../../Assets/Capterra Logo.svg";
import spense from "../../Assets/Spense_Icon.svg";
import "./content.css";

const Content = () => {
  return (
    <section>
      <div className="content-section">
        <h1>
          Ondeck is your remote <span>conference calling tool</span>
        </h1>
        <p>
          Ondeck is a service that allows you to create beautiful, online, and
          encrypted video calls for you and your remote team.
        </p>
        <button className="btn">Try for free</button>
        <div className="rating">
          <p>5.0 Rating based on reviews from: </p>
          <div className="rating-logo">
            <img src={alternate} alt="" />
            <img src={capterra} alt="" />
          </div>
        </div>
      </div>
      <div className="img-section">
        <img src={hero} alt="" />
      </div>
    </section>
  );
};

export default Content;
