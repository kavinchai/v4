import React from "react";
import "../css/Project.css";
import ProjectCard from '../components/ProjectCard'
import projectsJson from "../content/projects.json";

const Project = () => {
  return (
    <>
      <div className="proj-component">
        <div className="proj-container">
          <h1 className="proj-header header-txt">{'<'}Projects{'/>'}</h1>
          <h2 className="proj-subtitle sub-txt">Things I've made</h2>
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
