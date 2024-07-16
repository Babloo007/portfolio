import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Sai Venkat
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#skills">MY Skills</a>
        </li>
        <li>
          <a href="#profiles">Coding Profiles</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/saivenkat-mallela/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Babloo007">
          <BsGithub />
        </a>
        <a href="https://api.whatsapp.com/send?phone=919840375562/">
          <BsWhatsapp />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SAIVENKAT. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;