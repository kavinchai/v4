import React, { useState } from "react";
import "../css/Navbar.css";
import {scrollTo} from "../helper";

const Navbar = () => {
  const [myName, setMyName] = useState(true);

  return (
    <div className="navBarComponent">
      <div className="navBarContainer">
        <div
          className={myName === true ? "firstName firstNameEng navName" : "firstName firstNameTh navName"}
          onClick={() => setMyName((prev) => !prev)}
        >
          {myName === true ? "kavin" : "กวิน"}
        </div>
        <div
          className={myName === true ? "lastName lastNameEng navName" : "lastName lastNameTh navName"}
          onClick={() => setMyName((prev) => !prev)}
        >
          {myName === true ? "chai" : "ฉาย"}
        </div>
        <div className="navMenu">
          <button
            className="navBtn"
            onClick={() => scrollTo(".aboutComponent")}
          >
            about
          </button>
          <button className="navBtn" onClick={() => scrollTo(".exp-component")}>
            experience
          </button>
          <button
            className="navBtn"
            onClick={() => scrollTo(".project-component")}
          >
            projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
