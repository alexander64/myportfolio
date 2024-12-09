import React from "react";

const DeveloperCard = ({ developer, onClick }) => {
  return (
    <div className="developer-card" onClick={onClick}>
      <img src={developer.photo} alt={developer.name} />
      <h3>{developer.name}</h3>
      <p>{developer.role}</p>
    </div>
  );
};

export default DeveloperCard;