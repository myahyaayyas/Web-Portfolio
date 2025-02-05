// eslint-disable-next-line no-unused-vars
import React from "react";
import { getAllProject } from "../utils/local-data";

function ProjectPage() {
  const projects = getAllProject();

  function openNewTab(newTabUrl) {
    window.open(newTabUrl, "_blank");
  }

  return (
    <section className="section">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <div className="image-wrapper">
              <img src={project.image} alt="Project Image" />
            </div>
            <div className="content-wrapper">
              <h3>
                {project.title} <span className="category">{project.category}</span>
              </h3>
              <p>{project.kategori}</p>
              <p>{project.body}</p>
              <div className="featured-text-btn">
                <button className="btn" onClick={() => openNewTab(project.url)}>
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectPage;
