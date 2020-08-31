import React from "react";
import "./Brands.scss";
import Nike from "../../assets/images/nike.png";
import Pepsi from "../../assets/images/pepsi.png";
import Google from "../../assets/images/google.png";
import Cocacola from "../../assets/images/coca-cola.png";
import Microsoft from "../../assets/images/microsoft.png";

const brands = [
  { name: "Nike", src: Nike },
  { name: "Google", src: Google },
  { name: "Cocacola", src: Cocacola },
  { name: "Pepsi", src: Pepsi },
  { name: "Microsoft", src: Microsoft },
];

const Brands = () => (
  <div className="brands">
    {brands.map(({ name, src }, index) => (
      <img src={src} alt={name} key={index} />
    ))}
  </div>
);

export default Brands;
