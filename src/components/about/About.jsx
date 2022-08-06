import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { TbAward, TbUsers, TbFolder } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className="about__card">
              <TbUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ worldwide</small>
            </article>
            <article className="about__card">
              <TbFolder className="about__icon" />
              <h5>Projects</h5>
              <small>30+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            temporibus iusto molestias expedita sed ipsam nemo voluptatem minima
            doloribus ea pariatur itaque facere libero et natus id animi, non
            corrupti?
          </p>
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
