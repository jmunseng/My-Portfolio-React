import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.png';

//Portfolio Data

const PORTFOLIO_DATA = [
  {
    id: 1,
    image: IMG1,
    title: 'Dashboard App',
    discription: 'Router, SyncFusion, Tailwind Css, Mobile, Theme ',
    github: 'https://github.com/jmunseng/dashboard-app',
    demo: 'https://dashboard-app-munseong.vercel.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Food Order App',
    discription: 'REST API, Module CSS, FireBase BD, ',
    github: 'https://github.com/jmunseng/React-Food-Order-app',
    demo: 'https://react-food-order-app-munseong.vercel.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Meetup App',
    discription: 'NextJS, Server Side Rendering, Router, Rest API, MongoDB',
    github: 'https://github.com/jmunseng/React-Meetup-app',
    demo: 'https://react-meetup-app-munseong.vercel.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Simple ToDo List "TypeScript"',
    discription: 'TypeScript',
    github: 'https://github.com/jmunseng/simple-note-by-typescript',
    demo: 'https://simple-todo-with-typescript.vercel.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Quotes',
    discription: 'React, Router, FireBase, Lazy Loading',
    github: 'https://github.com/jmunseng/Quotes-router-firebase',
    demo: 'https://quotes-router-firebase.vercel.app/quotes',
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
