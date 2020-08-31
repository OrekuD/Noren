import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

const links = ["Home", "Service", "Team", "Blog", "Contact"];

const Header = () => (
  <header>
    <div className="logo">
      <img src={logo} alt="Logo" />
      <p>Noren.</p>
    </div>
    <div className="links">
      {links.map((link, index) => (
        <p className="link" key={index}>
          {link}
        </p>
      ))}
    </div>
  </header>
);

export default Header;
