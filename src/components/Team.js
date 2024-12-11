import React, { useState } from "react";
import DeveloperCard from "./DeveloperCard";
import DeveloperModal from "./DeveloperModal";
import { assets } from "../assets/assets";

const developers = [
  {
    name: "Alessio Scattareggia",
    role: "Front-End Developer",
    photo: assets.developerPhoto,
    description: "Experienced in React, CSS, and JavaScript.",
    skills: ["React", "CSS", "JavaScript"],
  },
  {
    name: "Mio Zio",
    role: "Porta da mangiare",
    photo: assets.developerPhoto, // Sostituisci con un'immagine diversa se disponibile
    description: "Specialized in Node.js, databases, and API development.",
    skills: ["Node.js", "MongoDB", "Express.js"],
  },
  {
    name: "Mio cugino",
    role: "Porta la droga",
    photo: assets.developerPhoto, // Sostituisci con un'immagine diversa se disponibile
    description: "Expert in user experience and interface design.",
    skills: ["Figma", "Adobe XD", "CSS"],
  },
];

const Team = () => {
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  return (
    <section className="team">
      <h1>Meet Our Team</h1>
      <p>Our team is composed of skilled professionals dedicated to delivering high-quality solutions.</p>
      <div className="developer-list">
        {developers.map((dev, index) => (
          <DeveloperCard
            key={index}
            developer={dev}
            onClick={() => setSelectedDeveloper(dev)}
          />
        ))}
      </div>
      {selectedDeveloper && (
        <DeveloperModal
          developer={selectedDeveloper}
          onClose={() => setSelectedDeveloper(null)}
        />
      )}
    </section>
  );
};

export default Team;