import React from "react";
import "./portfolio.css";
import "./webProjects.css";
import IMG1 from "../../assets/portfolioWeb1.png";
import IMG2 from "../../assets/portfolioWeb2.png";
import IMG3 from "../../assets/portfolioWeb3.png";
import IMG4 from "../../assets/portfolioWeb4.png";
import IMG5 from "../../assets/portfolioWeb5.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "React Weather App",
    github: "https://github.com/ajkumarray/weather-app",
    demo: "https://aj-react-weather-app.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Personal Portfolio",
    github: "https://github.com/ajkumarray/react-portfolio",
    demo: "https://ajit-portfolio-ajkumarray.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "STM Video Calling App",
    github: "https://github.com/ajkumarray/stm",
    demo: "https://stm-video-app.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Portfolio Demo 1",
    github: "https://github.com/ajkumarray/ray",
    demo: "https://ajkumarray.github.io/ray/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Dummy Organization",
    github: "https://github.com/ajkumarray/dummy-organization",
    demo: "https://ajkumarray.github.io/dummy-organization/",
  },
];

function WebProjects() {
  return (
    <div className="container portfolio__container-Web">
      {data.map(({ id, image, title, github, demo }) => {
        return (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-link">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default WebProjects;
