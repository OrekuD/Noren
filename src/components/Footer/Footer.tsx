import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.png";

const Footer = () => (
  <footer>
    <div className="logo">
      <img src={logo} alt="Logo" />
      <p>Noren.</p>
    </div>
    <p className="credit">2020 &copy; Ghassan Hani</p>
  </footer>
);

export default Footer;
