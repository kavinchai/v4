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
              "I'm a software engineer",
              1000,
              "I'm a photographer",
              1000,
              "I'm a designer",
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
