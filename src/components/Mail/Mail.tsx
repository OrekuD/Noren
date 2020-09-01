import React from "react";
import "./Mail.scss";
import Image from "../../assets/images/mail-box.png";

const Mail = () => (
  <div className="mail">
    <div>
      <p className="title">Get the pest project estimation</p>
      <div className="row">
        <input type="text" placeholder="Enter your email" />
        <button>Send</button>
      </div>
    </div>
    <img src={Image} alt="Mail box" />
  </div>
);

export default Mail;
