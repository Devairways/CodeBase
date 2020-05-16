import React from "react";

const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      <div
        className="profile-pic"
        style={{ background: `url(https://via.placeholder.com/100` }}
      />
      <div className="profile-caption">
        <h4>Your Name</h4>
        <p>@codername</p>
      </div>
      <div className="profile-follower">
        <div>
          <p>0</p>
          <p>Following</p>
        </div>
        <div>
          <p>0</p>
          <p>Following</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
