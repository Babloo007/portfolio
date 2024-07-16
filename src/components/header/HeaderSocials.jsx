import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/saivenkat-mallela/" 
        target="_blank" rel='noreferrer'>
        <BsLinkedin />
      </a>
      <a href="https://github.com/Babloo007" 
        target="_blank" rel='noreferrer'>
        <FaGithub />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=919840375562"
        target="_blank" rel='noreferrer'>
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocials;