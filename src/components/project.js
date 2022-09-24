import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Project = ({ proj }) => {
  return (
    <Link to={`/project/${proj.name}`} className="project">
      <figure>
        <LazyLoadImage
          effect="blur"
          src={require(`../assets/${proj.mainPic}`)}
          alt="preview"
          loading="lazy"
        />
        <div className="projectName">
          <h2 className="text-2xl font-extrabold">{proj.name}</h2>
        </div>
      </figure>
    </Link>
  );
};

export default Project;
