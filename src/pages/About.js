import React, { useState } from "react";
import "../css/About.css";
import imag from "../imgs/kavin_image.png";
import Navbar from "../components/Navbar";

const About = () => {
  const [myName, setMyName] = useState(true);
  return (
    <>
      <Navbar />
      <div className="about-component">
        <div className="about-container">
          <h1 className="about-header header-txt">
            {"<"}About{"/>"}
          </h1>
          <h2>Who's this?</h2>
          <p>
            My name's{" "}
            <mark
              className="highlight nameMark"
              onClick={() => setMyName((prev) => !prev)}
            >
              {myName === true ? "Kavin" : "กวิน"}
            </mark>
            {", "}
            I'm a software engineer in New York. I write code, take photos, and
            run in my free time.
          </p>
          <h2>What's here?</h2>
          <p>Projects and experience — the stuff I'd want someone to see.</p>
          {/* <img src={imag} className="about-img-placeholder" alt="kavinImg" /> */}
        </div>
      </div>
    </>
  );
};

export default About;
