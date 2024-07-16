import React from "react";
import "./profiles.css";
import { SiCodingninjas } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Profiles = () => {
  return (
    <section id="profiles">
      <h5>Coding Skills</h5>
      <h2>Coding Profiles</h2>

      <div className="container profile__container">
        <article className="profile__option">
          <SiLeetcode className="profile__option-icon" />
          <h4>Leetcode</h4>
          <h5 className="light-grey">100+ Problems</h5>
          <a href="https://leetcode.com/u/saivenkat7/" 
            target="_blank" rel='noreferrer'>
            View Profile
          </a>
        </article>
        <article className="profile__option">
          <SiGeeksforgeeks className="profile__option-icon" />
          <h4>Geeks For Geeks</h4>
          <h5 className="light-grey">160+ Score</h5>
          <a href="https://auth.geeksforgeeks.org/user/manishk4514"
            target="_blank" rel='noreferrer'>
            View Profile
          </a>
        </article>
        <article className="profile__option">
          <SiCodingninjas className="profile__option-icon" />
          <h4>Coding Ninjas</h4>
          <h5 className="light-grey">1521 Rating</h5>
          <a href="https://www.naukri.com/code360/profile/Babloo" 
            target="_blank" rel='noreferrer'>
            View Profile
          </a>
        </article>
      </div>
    </section>
  );
};

export default Profiles;