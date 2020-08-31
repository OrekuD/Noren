import React from "react";
import "./Benefits.scss";

import Image1 from "../../assets/images/bar-chart.png";
import Image2 from "../../assets/images/pie-chart.png";
import Image3 from "../../assets/images/packet.png";

const benefits = [
  {
    title: "Grow your traffic",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: Image1,
  },
  {
    title: "Get quality leads",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: Image2,
  },
  {
    title: "Drive more sales",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: Image3,
  },
];

const Benefits = () => (
  <div className="benefits">
    {benefits.map(({ title, subtitle, image }, index) => (
      <div key={index} className="benefit">
        <img
          src={image}
          alt={title}
          style={{
            width: index === 2 ? 220 : 110,
            marginLeft: index === 2 ? 40 : 0,
          }}
        />
        <div className="title">{title}</div>
        <div className="sub-title">{subtitle}</div>
      </div>
    ))}
  </div>
);

export default Benefits;
