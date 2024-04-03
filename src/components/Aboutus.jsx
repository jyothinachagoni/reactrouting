import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h2>About</h2>
      <ul>
        <li>
          <Link to="/about/classes">Classes</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default About;
