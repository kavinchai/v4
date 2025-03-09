import React from "react";
import "../css/ProjectCard.css";

const ProjectCard = ({ proj: { title, desc, link, tech } }) => {
  return (
    <a
      className="project-card-component"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className="project-card-header">
        <div className="project-card-header-sect">
          <div className="project-card-title">{title}</div>
        </div>
      </div>
      <div className="project-card-body">
        <div className="project-card-body-sect"> 
          <div className="project-card-desc">{desc}</div>
        </div>
      </div>
      <div className="project-card-footer">
        <div className="project-card-footer-sect">
          <div className="project-card-tech">
            {tech.map((key, index) => (
              <div key={index} className="tech-used">
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
