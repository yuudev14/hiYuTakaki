import React from "react";
import ProjectList from "../projects";
import Project from "./project";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1>PROJECTS</h1>
      <div className="section-content">
        <div className="project-container">
          {ProjectList.projects.map((proj) => (
            <Project proj={proj} key={proj.name} />
          ))}
        </div>
        <div className="project-container">
          {ProjectList.oldProjects.map((proj) => (
            <Project proj={proj} key={proj.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
