import "./portfolio.css";
import IMG1 from "../../assets/Lepark.png";
import IMG2 from "../../assets/williams.png";
import IMG3 from "../../assets/42payapp.png";
import React from "react";

// Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "App LePark fron Magnetic Cash",
      img: IMG1,
      description:
        "LePark is the first app under the concept of 42payapp, which aims to replace traditional cards and tokens in entertainment venues with a user-friendly interface right at your fingertips.",
      technologies: "React Native | Typescript | Python | Django | Angular | Ionic",
      link: "https://play.google.com/store/apps/details?id=com.lepark&hl=es_US&gl=US",
    },
    {
      id: 2,
      title: "Williams",
      img: IMG2,
      description:
        "Williams was one of the first significant projects in my career, where the challenge was to create a web application that serves to manage sales agents and everything related to real estate. It is a completed and paid project.",
      technologies: "Typescript | Tailwind | Firebase | React and Redux Toolkit",
    },
    {
      id: 3,
      title: "42PayApp from Magnetic Cash",
      img: IMG3,
      description:
        "42PayApp is a digital platform, integrable with current (compatible) card systems, that offers entertainment center visitors the possibility to play with their mobile phones through an app without the need to purchase a physical card. (Work in progress)",
      technologies: "Nginx | Angular | Typescript | Node.js",
      link: "https://42payapp.com",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {pro.link ? (
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Deployed Link
                </a>
              ) : (
                <button className="btn">No Live Demo Available</button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
