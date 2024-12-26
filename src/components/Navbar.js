import React, { useState } from "react";
import "../css/Navbar.css";
import {Link, useLocation} from "react-router-dom";
import {scrollTo} from "../helper";

const Navbar = () => {
  const [myName, setMyName] = useState(true);
  const location = useLocation();

  return (
    <div className="navBarComponent">
      <div className="navBarContainer">
        <div className="navNameContainer">
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
        </div>
        <div className="navMenu">
          {location.pathname == '/' ? (
            <>
              <button className="navBtn" onClick={() => scrollTo(".about-component")}>about</button>
              <button className="navBtn" onClick={() => scrollTo(".exp-component")}>experience</button>
              <button className="navBtn" onClick={() => scrollTo(".proj-component")}>projects</button>
              <Link to="/notes">
                <button className="navBtn">notes</button>
              </Link>
            </>
          ) : location.pathname === '/notes' ? (
            <>
              <Link to="/">
                <button className="navBtn">home</button>
              </Link>
            </>
          ) : null}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
