import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

//Portfolio Data

const PORTFOLIO_DATA = [
  {
    id: 1,
    image: IMG1,
    title: "Deividas Bielskis",
    discription: "htmltetml",
    github: "http://github.com",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "Oguz YagIz Kara",
    discription: "htmltetml",
    github: "http://github.com",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "Joao Augusto",
    discription: "htmltetml",
    github: "http://github.com",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "Outcrowd",
    discription: "htmltetml",
    github: "http://github.com",
    demo: "",
  },
  {
    id: 5,
    image: IMG5,
    title: "Balkan Brothers",
    discription: "htmltetml",
    github: "http://github.com",
    demo: "",
  },
  {
    id: 6,
    image: IMG6,
    title: "Mako Tsereteli",
    discription: "htmltetml",
    github: "http://github.com",
    demo: "",
  },
];

const Portfolio = (props) => {
  const [count] = useState(PORTFOLIO_DATA.length);

  useEffect(() => {
    // setCount(PORTFOLIO_DATA.length);
    props.getProjectNum(count);
  });

  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {PORTFOLIO_DATA.map((e, i) => {
          return (
            <article className="portfolio__item" key={i}>
              <div className="portfolio__item-image">
                <img src={e.image} alt={e.id} />
              </div>
              <h3>{e.title}</h3>
              <p>{e.discription}</p>
              <div className="portfolio__item-cta">
                <a href={e.github} className="btn" target="_blank">
                  Github
                </a>
                <a href={e.demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
