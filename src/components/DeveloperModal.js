import React from "react";

const DeveloperModal = ({ developer, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <h2>{developer.name}</h2>
        <p>{developer.description}</p>
        <p>Specializations: {developer.skills.join(", ")}</p>
      </div>
    </div>
  );
};

export default DeveloperModal;