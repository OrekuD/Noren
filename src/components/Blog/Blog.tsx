import React from "react";
import "./Blog.scss";
import Image1 from "../../assets/images/article-1.png";
import Image2 from "../../assets/images/article-2.png";
import Image3 from "../../assets/images/article-3.png";

import Calendar from "../../assets/images/calendar.png";
import Hourglass from "../../assets/images/hour-glass.png";

const articles = [
  {
    label: "Waiting list management",
    image: Image1,
  },
  {
    label: "E-commerce update",
    image: Image2,
  },
  {
    label: "Shopify's Q2 report",
    image: Image3,
  },
];

const Blog = () => (
  <div className="blog">
    <p className="title">From blog</p>
    <div className="articles">
      {articles.map(({ label, image }, index) => (
        <div className="article" key={index}>
          <img src={image} alt="" className="image" />
          <div className="content">
            <div className="row">
              <div className="section">
                <div className="icon">
                  <img src={Calendar} alt="Date" />
                </div>
                <p>23 Aug 2020</p>
              </div>
              <div className="section" style={{ marginRight: 15 }}>
                <div className="icon" style={{ backgroundColor: "#DDF4FA" }}>
                  <img src={Hourglass} alt="Time" />
                </div>
                <p>12 min</p>
              </div>
            </div>
            <p className="label">{label}</p>
            <p className="text">
              The waitlist is an invaluable marketing tool when used
              appropriately. Here's how to capture those contacts.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Blog;
