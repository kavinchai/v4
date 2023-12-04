import React from "react";
import "../css/Project.css";
import ProjectCard from "./ProjectCard";
import projectsJson from "../content/projects.json";

const Project = () => {
  return (
    <>
    <div className="project-trans"/>
    <div className="project-component">
      <div className="project-container">
        <div className="project-header project-header-text">Projects</div>
        <div className="project-header-subtitle">Things i've made</div>
        <div className="project-body">
          {projectsJson.data.map((projInfo, index) => (
            <ProjectCard key={index} proj={projInfo}/>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default Project;
