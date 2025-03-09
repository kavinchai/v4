import React, { useState } from "react";
import "../css/About.css";
import imag from "../imgs/kavin_image.png";
import Navbar from "../components/Navbar";

const About = () => {
  const [myName, setMyName] = useState(true);
  return (
    <>
      <Navbar/>
      <div className="about-component">
        <div className="about-container">
            <h1 className="about-header header-txt">{'<'}About{'/>'}</h1>
            <h2>What is this anyways?</h2>
            <p>
              Hi, my name is{" "}
              <mark
                className="highlight nameMark"
                onClick={() => setMyName((prev) => !prev)}
              >
                {myName === true ? "Kavin Chaisawangwong" : "กวิน ฉายสว่างวงศ์"}
              </mark>
              {' '} and I'm a 24 year old SWE based in New York City. I created
              this website when I was still applying to jobs. It was a place where I 
              showcased what I worked on and where.. but now I want it to be something more!

            </p>
            <h2>So what now?</h2>
            <p>
              I'm still figuring that out. I want this website to be a place where I can share
              my thoughts, projects, and experiences. I want it to be a place where I can learn
              and grow. I want it to be a place where I can connect with others who share similar
              interests.
            </p>
            <h2>Thats cool, but what do you mean specifically?</h2>
            <p>
              I'll post what I'm studying, what cool photos I've taken recently, and other 
              things that might pop into my head from time to time.
            </p>
          {/* <img src={imag} className="about-img-placeholder" alt="kavinImg" /> */}
        </div>
      </div>
    </>
  );
};

export default About;
