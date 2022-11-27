import React from "react";

const ProfileCard = ({ title, handle, value }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{handle}</div>
      <div>{value}</div>
    </div>
  );
};

export default ProfileCard;
