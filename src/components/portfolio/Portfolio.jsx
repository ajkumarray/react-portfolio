import React from "react";
import "./portfolio.css";
import WebProjects from "./WebProjects";
import MLProjects from "./MLProjects";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__subContainer">
        <h3>Web Development Projects</h3>
        <WebProjects />
      </div>
      <div className="container portfolio__subContainer">
        <h3>Machine Learning Projects</h3>
        <MLProjects />
      </div>
    </section>
  );
};

export default Portfolio;
