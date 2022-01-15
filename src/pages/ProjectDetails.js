import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectList from "../projects";
import "../styles/sass/projectDetails.scss";

const ProjectDetails = () => {
  const { name } = useParams();
  const [project, setProject] = useState({});
  const [projectImages, setProjectImages] = useState([]);
  const [previewImg, setPreviewImg] = useState(null);
  function importAll(r) {
    return r.keys().map(r);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    const getProject = [
      ...projectList.projects,
      ...projectList.oldProjects,
    ].find((proj) => proj.name === name);
    setProject(getProject);
  }, [name]);

  useEffect(() => {
    if (project.imageFolder) {
      const projectImages = importAll(project.imageFolder);
      setProjectImages(projectImages);
    }
  }, [project]);
  return (
    <main className="projectDetailPage">
      {previewImg && (
        <section className="imagePreview">
          <i className="fa fa-close" onClick={() => setPreviewImg()}></i>
          <img src={previewImg} alt="preview" />
        </section>
      )}
      <section className="projectInfo">
        <h1>Project Info</h1>

        <img
          src={project.mainPic && require(`../assets/${project.mainPic}`)}
          alt="mainPic"
        />
        <div className="btns">
          {project.app_url && (
            <a href={project.app_url} target="_blank">
              <button>Demo</button>
            </a>
          )}

          <a href={project.github_url} target="_blank">
            <button>Repo</button>
          </a>
        </div>
        <h1>{project.name}</h1>
        <p>{project.description}</p>

        <ul className="techStack">
          {project.stack && project.stack.map((tech) => <li>{tech}</li>)}
        </ul>
        <h1>Role</h1>
        <ul className="role">
          {project.roles && project.roles.map((role) => <li>{role}</li>)}
        </ul>
      </section>

      <section className="projectGallery">
        <h1>Gallery</h1>
        <div className="galleryGrid">
          {projectImages.map((proj) => (
            <img
              onClick={() => setPreviewImg(proj)}
              src={proj}
              alt="projects"
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;
