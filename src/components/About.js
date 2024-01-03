import React, { useState } from "react";
import "../css/About.css";
import imag from "../imgs/kavin_image.png";

const About = () => {
  const [myName, setMyName] = useState(true);

  return (
    <>
      <div className="about-component">
        <div className="about-container">
          <div className="about-left-container">
            <p>
              Hi! My name is{" "}
              <mark
                className="highlight nameMark"
                onClick={() => setMyName((prev) => !prev)}
              >
                {myName === true ? "Kavin Chaisawangwong" : "กวิน ฉายสว่างวงศ์"}
              </mark>
              . I recently graduated from Virginia Tech with a B.S. in Computer
              Engineering and a B.A. in Economics. I'm currently a Software
              Engineer at Wells Fargo.
            </p>
            <p>
              I enjoy experimenting with new technologies and exploring ways to
              practically integrate them into my life.
            </p>
          </div>

          <img src={imag} className="about-img-placeholder" alt="kavinImg" />
        </div>
      </div>
    </>
  );
};

export default About;
