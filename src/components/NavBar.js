import React from "react";
import About from "./About";
import Home from "./Home";
import ProjectList from "./ProjectList";

function NavBar() {
  const links = ["home", "about", "projects"];

  const anchors = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ))

  return <nav>{anchors}</nav>;
}

export default NavBar;
