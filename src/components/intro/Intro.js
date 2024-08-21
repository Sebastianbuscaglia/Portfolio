import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/me.jpeg";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            Competent Full-stack Developer with over a year of experience in building Web & Mobile applications.
            <br />
            My goal is to provide efficient and effective solutions, abiding by the following principles in my work:
            <br />
            - I focus on delivering solutions that cater to my client's needs and address their problems.
            <br />
            - I believe in keeping my clients engaged throughout the development process, ensuring they are fully informed and satisfied with the progress of their project.
            <br />
            Despite my relatively short tenure, I have demonstrated a fast acquisition of skills and the ability to deliver high-quality projects. I am excited by the opportunity to continue growing and tackling new challenges in the field of software development.
            <br />
            Currently, I am working as a Full-stack Developer at Magnetic Cash, where I have successfully completed over 10 projects that are operational in various companies across Latin America and Europe.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
