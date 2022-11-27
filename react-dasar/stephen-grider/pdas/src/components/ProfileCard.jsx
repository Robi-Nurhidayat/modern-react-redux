import React from "react";

const ProfileCard = ({ title, handle, image }) => {
  return (
    <div>
      <img src={image} alt="pda logo" />
      <div>{title}</div>
      <div>{handle}</div>
    </div>
  );
};

export default ProfileCard;