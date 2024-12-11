import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { assets } from "../assets/assets";

const projects = [
  {
    name: "Project One",
    description: "A description of the first project.",
    image: assets.projectPreview,
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://example.com/project-one",
  },
  {
    name: "Project Two",
    description: "A description of the second project.",
    image: assets.projectPreview,
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "https://example.com/project-two",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="portfolio">
      <h1 className="title">Our Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;