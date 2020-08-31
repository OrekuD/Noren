import React from "react";
import "./Banner.scss";
import Header from "../Header/Header";
import Pattern from "../../assets/images/pattern.png";

const Banner = () => {
  return (
    <div className="banner">
      <Header />
      <img src={Pattern} alt="" className="pattern" />
      <div className="content"></div>
    </div>
  );
};

export default Banner;
