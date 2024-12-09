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
];

const Team = () => {
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  return (
    <section className="team">
      <h1>Our Team</h1>
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