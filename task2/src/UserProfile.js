import React from "react";
import "./UserProfile.css";

const UserProfile = ({ name, age, hobbies }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <h2 className="profile-title">User Profile</h2>
      </div>
      <div className="profile-content">
        <p className="profile-item">
          <strong>Name:</strong> <span className="fade-in">{name}</span>
        </p>
        <p className="profile-item">
          <strong>Age:</strong> <span className="fade-in">{age}</span>
        </p>
        <div className="profile-item">
          <strong>Hobbies:</strong>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index} className="profile-hobby fade-in">
                {hobby}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
