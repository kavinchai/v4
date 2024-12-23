import React from "react";
import "../css/Project.css";
import ProjectCard from "./ProjectCard";
import projectsJson from "../content/projects.json";

const Project = () => {
  return (
    <>
      <div className="proj-component">
        <div className="proj-container">
          <div className="proj-header header-txt">{'<'}Projects{'/>'}</div>
          <div className="proj-subtitle sub-txt">Things I've made</div>
          <div className="proj-body">
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
