import React, { useEffect, useState } from "react";
import "../css/Exp.css";
import jobsJson from "../content/jobs.json";
import ExpDesc from "./ExpDesc";

const Exp = () => {
  const [dispNum, setDispNum] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(jobsJson.data[dispNum - 1]);
  }, [dispNum]);

  return (
    <div className="exp-component">
      <div className="exp-container">
        <text className="exp-header header-txt">Experience</text>
        <div className="exp-header sub-txt">Places i've worked</div>
        <div className="exp-body">
          <div className="exp-nav">
            {jobsJson.data.map((expInfo, index) => (
              <button
                key={`${index} ${dispNum}`}
                className={
                  dispNum === index + 1
                    ? "exp-nav-btn exp-nav-btn-active"
                    : "exp-nav-btn"
                }
                onClick={() => {
                  setDispNum(index + 1);
                }}
              >
                {expInfo.company}
              </button>
            ))}
          </div>
          <ExpDesc data={data}/>
        </div>
      </div>
    </div>
  );
};

export default Exp;
