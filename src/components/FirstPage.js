import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../css/FirstPage.css";

const FirstPage = () => {
  return (
    <div className="first-page-component">
      <text className="name-section">Kavin Chaisawangwong</text>
      <TypeAnimation
        sequence={[
          "I write code",
          1000,
          "I design websites",
          1000,
          "I take photos",
          1000,
          "I drink coffee",
          1000,
        ]}
        speed={30}
        repeat={Infinity}
        className="desc-section"
      />
    </div>
  );
};

export default FirstPage;
