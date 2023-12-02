import React from "react";
import "../css/ExpDesc.css";

const ExpDesc = ({
  data: { title, company, location, duration, url, text }
}) => {
  return (
    <div className="exp-desc-component">
      <div className="exp-desc-header">
        <div className="exp-desc-headerSec1">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="expDescCompany"
          >{`${company}`}</a>
          <div className="exp-desc-title">{title}</div>
        </div>
        <div className="exp-desc-headerSec2">
          <div className="exp-desc-duration">{duration}</div>
          <div className="exp-desc-location">{location}</div>
        </div>
      </div>
      <div className="exp-desc-body">
      <ul className="exp-desc-unordered-list">
          {text?.map((key) => (
            <li key={key} className="exp-desc-list">
              {key}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpDesc;
