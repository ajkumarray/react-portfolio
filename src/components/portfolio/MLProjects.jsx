import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolioML1.png";
import IMG2 from "../../assets/portfolioML2.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Text Classifier",
    github:
      "https://github.com/ajkumarray/colab-notebook/blob/master/text_classification.ipynb",
    demo: "https://colab.research.google.com/github/ajkumarray/colab-notebook/blob/master/text_classification.ipynb",
  },
  {
    id: 2,
    image: IMG2,
    title: "Forward NN example",
    github:
      "https://github.com/ajkumarray/colab-notebook/blob/master/feedforward_nn_example.ipynb",
    demo: "https://colab.research.google.com/drive/1FjEfrd5MxmO-KBaPqop7XIfn3IPtdPMp",
  },
];

function MLProjects() {
  return (
    <div className="container portfolio__container">
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
                Google Colab
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default MLProjects;
