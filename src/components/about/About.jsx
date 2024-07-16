import React from "react";
import "./about.css";
import ME from "../../assets/me.jpeg";
import { FaAward } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About pic" id="myPhoto" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Software Engineer</h5>
              <small>ArganoKeste</small>
            </article>

            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Education</h5>
              <small>B.Tech, CSE</small>
            </article>

            <article className="about__card">
              <BsFillFileEarmarkCodeFill className="about__icon" />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>

          <p id="para">
            I have been working as Software Developer. Currently working as Salesforce Developer in ArganoKeste. And I have a good knowledge on Java, Reactjs, NodeJs, Express Js, MongoDB, C, C++,
            Data Structures and Algorithms, HTML, CSS and JavaScript. I have also been working on building the side projects focusing on Backend using java.
            I'm also a competitive programmer.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;