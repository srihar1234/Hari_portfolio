/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./HeroImage.css";
import IntroImage from "../assets/IntroImage.jpg"

import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroImage = () => {
  return (
    <div className="hero"> 
      <div className="mask">
        <img className="introImage" src={IntroImage} alt="introImg"/>
      </div>
      <div className="content">
        <h1>HI,I'M SRI HARI</h1>
        <h3>FULL STACK DEVELOPER</h3>
        <div className="buttons">
          <a href="https://github.com/srihar1234?tab=repositories" target="_blank" className="btn"><FaGithub/> GITHUB</a>
          <a href="https://www.linkedin.com/in/sri-hari-k/" target="_blank" className="btn btn-light"><FaLinkedin/> LINKEDIN</a>
          <a href="https://drive.google.com/file/d/1VzKj9XqW5dG5Lxthkmb0ojdiLBvM5xlg/view?usp=sharing" target="_blank" className="btn">RESUME</a>
        </div>
      </div>  
    </div>
  )
}

export default HeroImage
