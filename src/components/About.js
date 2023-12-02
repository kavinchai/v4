import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../css/About.css";

const About = () => {

  return (
    <div className="about-component">
        <div className="left-section">
          <text className="name-section">
            Kavin Chaisawangwong
          </text>
          <TypeAnimation
            sequence ={[
              "I write code",
              1000,
              "I design websites",
              1000,
              "I take photos",
              1000,
              "I review coffee",
              1000
            ]}
            speed={30}
            repeat={Infinity}
            className="desc-section"
          />
        </div>
        <div className="right-section"></div>
    </div>
  );
};

export default About;
