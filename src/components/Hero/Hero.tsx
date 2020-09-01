import React from "react";
import "./Hero.scss";
import Image from "../../assets/images/Illustration.png";
import Pattern from "../../assets/images/pattern.png";

const ads = [
  {
    label: "Power your business to new heights with our award-winning ",
    color: "#F4DDA0",
  },
  {
    label: "Power your business to new heights with our award-winning ",
    color: "#BCD5FC",
  },
  {
    label: "Power your business to new heights with our award-winning ",
    color: "#FAC2CF",
  },
];

const Hero = () => (
  <div className="hero-section">
    <img src={Image} alt="Hero" className="hero-image" />
    <div className="content">
      <p className="title">We take care of your business</p>
      <p className="subtitle">
        Power your business to new heights with our award-winning digital
        marketing services and technology platform.
      </p>
      {ads.map(({ color, label }, index) => (
        <div className="item" key={index}>
          <div className="color-container">
            <div className="color" style={{ backgroundColor: color }}>
              <p>{index + 1}</p>
            </div>
          </div>
          <p className="label">{label}</p>
        </div>
      ))}
    </div>
    <img src={Pattern} alt="Pattern" className="pattern" />
  </div>
);

export default Hero;

// #FBF3DD
