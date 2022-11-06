import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>About</div>
      <Link to="email">Email</Link>
      <Link to="alamat">Alamat</Link>
      <Outlet />
    </>
  );
};

export default About;
