import React from "react";
import "./OurNumbers.scss";
import Image from "../../assets/images/colors.png";
import Pattern from "../../assets/images/pattern.png";

const OurNumbers = () => (
  <div className="our-numbers">
    <img src={Pattern} alt="Colors" className="pattern" />
    <div className="content">
      <p className="title">Our numbers</p>
      <p className="subtitle">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <button>Let's talk</button>
    </div>
    <img src={Image} alt="Colors" className="colors" />
  </div>
);

export default OurNumbers;
