import React from "react";
import "./projects.css";
import IMG1 from "../../assets/project1.png";
import NoteIMG from "../../assets/NoteApp.png";
import SocialIMG from "../../assets/SocialApp.PNG";
import FilmIMG from "../../assets/FilmFliker.png";
import IMG2 from "../../assets/project2.png";
const Portfolio = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={SocialIMG} alt="" />
          </div>
          <h3>SocialCircle - Social Media Web-App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Babloo007/SocialCircle"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://socialcircle.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={FilmIMG} alt="" />
          </div>
          <h3>FilmFliker - Movie Catalog Web-App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Babloo007/FilmFliker"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://filmfliker.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={NoteIMG} alt="" />
          </div>
          <h3>NoteApp - Note Taking Web-App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Babloo007/Learn-a-Fact-Today"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://todofe-sepia.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>My Portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Babloo007/portfolio"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://portfolio-git-master-babloo007s-projects.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Disney + Hotstar Clone - Movie Catalog</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Babloo007/DisneyPlusClone.github.io"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://disneyplus4514.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
