import React from "react";
import "./Nav.css";

const Nav = () => {
  const sections = ["Home", "About", "Skills", "Contact", "Other"];
  return (
    <nav id="nav">
      <div id="nav-left-container">
        <img
          src={require("../../assets/images/logo.svg").default}
          alt="logo"
        ></img>
      </div>
      <div id="nav-right-container">
        {sections.map((section) => (
          <a href={`#${section}`}>{section}</a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
