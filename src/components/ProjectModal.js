import React from "react";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <h2>{project.name}</h2>
        <img src={project.image} alt={project.name} />
        <p>{project.description}</p>
        <p><strong>Technologies Used:</strong> {project.technologies.join(", ")}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;