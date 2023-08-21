import React from "react";
import Navbar from "./Navbar.js";
import NavbarOnHome from "./NavbarOnHome.js";
import Content from "./Content.js";

const Home = () => {
  return (
    <div>
      <NavbarOnHome />
      <Content />
    </div>
  );
};

export default Home;
