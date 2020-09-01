import React from "react";
import "./Testimonials.scss";
import Image from "../../assets/images/message.png";
import Profile1 from "../../assets/images/profile-2.png";
import Profile2 from "../../assets/images/profile-1.png";
import { ChevronRight, ChevronLeft } from "../../svg/Svg";

const testimonials = [
  {
    name: "Sampson Totton",
    role: "UI/UX Designer",
    image: Profile1,
  },
  {
    name: "Karl Kalagin",
    role: "Manager of Saro",
    image: Profile2,
  },
];

const Testimonials = () => (
  <div className="testimonials">
    <div className="section">
      <img src={Image} alt="" />
      <p className="title">What they say?</p>
      <p className="subtitle">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum.
      </p>
    </div>
    {testimonials.map(({ image, name, role }, index) => (
      <div className="testimonial" key={index}>
        <div className="profile">
          <img src={image} alt={name} className="profile-image" />
          <div className="details">
            <p className="name">{name}</p>
            <p className="role">{role}</p>
          </div>
          <div className="number">
            <p>{index + 1}</p>
          </div>
        </div>
        <p className="comment">
          We are happy to hear you had a positive experience at Noren! We value
          your input and encourage you to let us know more details about your
          experience with us.
        </p>
      </div>
    ))}
    <div className="icons">
      <div className="icon">
        <ChevronRight size={8} color="#000000" />
      </div>
      <div className="icon">
        <ChevronLeft size={8} color="#000000" />
      </div>
    </div>
  </div>
);

export default Testimonials;
