import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { TbAward } from "react-icons/tb";
import { MdComputer } from "react-icons/md";

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
              <h5>Student</h5>
              <small>at BIT Mesra</small>
            </article>
            <article className="about__card">
              <MdComputer className="about__icon" />
              <h5>Frontend Developer</h5>
              <small>in making</small>
            </article>
          </div>
          <p>
            I am a final year student at Birla Institute of Technology, Mesra,
            pursuing my B.Tech in Information Technology . I have a passion for
            coding, Web development and Machine Learning.
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
