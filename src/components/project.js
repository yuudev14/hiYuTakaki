import React from "react";
import { Link } from "react-router-dom";

const Project = ({ proj }) => {
  return (
    <Link to={`/project/${proj.name}`} className="project">
      <figure>
        <img src={require(`../assets/${proj.mainPic}`)} alt="preview" loading="lazy" />
        <div className="projectName">
          <h2>{proj.name}</h2>
        </div>
      </figure>
    </Link>
  );
};

export default Project;
