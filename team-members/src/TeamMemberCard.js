import React from 'react';
import './TeamMemberCard.css';

const TeamMemberCard = ({ name, role, description, image }) => {
  return (
    <div className="team-member-card">
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front">
          <img src={image} alt={name} className="team-member-image" />
          <div className="team-member-info">
            <h3>{name}</h3>
            <p>{role}</p>
          </div>
        </div>
        
        {/* Back Side */}
        <div className="card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
