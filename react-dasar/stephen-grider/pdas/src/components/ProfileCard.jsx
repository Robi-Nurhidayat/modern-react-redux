import React from "react";

const ProfileCard = ({ title, handle, image, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="pdas logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handle}</p>
          </div>
        </div>
      </div>
      <div className="content">{description}</div>
    </div>
  );
};

export default ProfileCard;
