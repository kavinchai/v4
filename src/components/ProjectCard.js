import React from "react";
import "../css/ProjectCard.css";

const ProjectCard = ({ proj: { title, desc, link, tech } }) => {
  return (
    <a
      className="projCardComponent"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className="projHeader">
        <div className="projHeaderSect">
          <div className="projTitle">{title}</div>
        </div>
      </div>
      <div className="projBody">
        <div className="projBodySect"> 
          <div className="projDesc">{desc}</div>
        </div>
      </div>
      <div className="projFooter">
        <div className="projFooterSect">
          <div className="projTech">
            {tech.map((key, index) => (
              <div key={index} className="techUsed">
                {key}
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
