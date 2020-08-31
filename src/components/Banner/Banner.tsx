import React from "react";
import "./Banner.scss";
import Header from "../Header/Header";
import Pattern from "../../assets/images/pattern.png";
import Hero from "../../assets/images/hero.png";

const Banner = () => {
  return (
    <div className="banner">
      <Header />
      <img src={Pattern} alt="" className="pattern" />
      <div className="content">
        <div className="hero-content">
          <p className="title">Get business solutions with Noren.</p>
          <p className="sub-title">
            Power your business to new heights with our award-winning digital
            marketing services and technology platform.
          </p>
          <button>Get Started</button>
        </div>
        <img src={Hero} alt="" className="hero" />
      </div>
    </div>
  );
};

export default Banner;
