import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./ProfileCard.css";

function ProfileCard({ name, bio, picture }) {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="profile-container">
      {/* Title before the card */}
      <h1 className="profile-title">My Personal Profile</h1>

      <div className="profile-card animated-card">
        <img src={picture} alt={`${name}'s profile`} className="profile-pic" />
        <h2 className="profile-name">{name}</h2>
        <button className="toggle-bio-btn" onClick={() => setShowBio(!showBio)}>
          {showBio ? "Hide Bio" : "Show Bio"}
        </button>
        <CSSTransition
          in={showBio}
          timeout={300}
          classNames="bio-animation"
          unmountOnExit
        >
          <p className="profile-bio">{bio}</p>
        </CSSTransition>
      </div>
    </div>
  );
}

export default ProfileCard;
