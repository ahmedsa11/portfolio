import React, { useEffect } from "react";
import "./land.css";
import im1 from "../../img/photo_2022-09-09_15-36-01.jpg";
import WOW from "wowjs";
import home from "../../img/home-svgrepo-com.svg";
import contact from "../../img/contact-svgrepo-com.svg";
import skills from "../../img/task-svgrepo-com.svg";
import about from "../../img/profile-about-mobile-ui-svgrepo-com.svg";
import projects from "../../img/map-svgrepo-com.svg";
import cv from './Ahmed.Salama.pdf'
import Up from "../up/up";
const Land = () => {
  const activeLink = () => {
    const link = document.querySelectorAll(".land img");
    link.forEach((act) => {
      act.addEventListener("click", function () {
        link.forEach((btn) => btn.classList.remove("activelink"));
        this.classList.add("activelink");
      });
    });
  };
  useEffect(() => {
    activeLink();
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <> <Up/>
      <div className="land" id="home">
       
        <a
          href={cv}
          className="cv"
          data-wow-duration="2s"
          download
          alt="cv"
        >
          Download Cv
        </a>
        <div className="in">
          <div className="wrapper">
            <div className="static-txt">
              <h4 className="wow fadeInDown" data-wow-duration="2s">
                Hello I'm
              </h4>
              <h1 className="wow fadeIn" data-wow-duration="4s">
                Ahmed Salama{" "}
              </h1>
            </div>
            <div className="dynamic-txt">
              <h1 id="txt">
                Front-End Web Developer <span>React.js</span>
              </h1>
            </div>
          </div>
          <div className="wow fadeInUp img" data-wow-duration="2s">
            <img src={im1} alt="pr" />
          </div>
        </div>
        <div className="navbarr">
          <ul className="wow fadeInRight" data-wow-duration="2s">
            <li>
              <a href="#home">
                <img className="activelink" src={home} alt="home" />
              </a>
            </li>
            <li>
              <a href="#about">
                <img src={about} alt="about" />
              </a>
            </li>
            <li>
              <a href="#skills">
                <img src={skills} alt="skills" />
              </a>
            </li>
            <li>
              <a href="#projects">
                <img src={projects} alt="projects" />
              </a>
            </li>
            <li>
              <a href="#contact">
                <img src={contact} alt="contact" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Land;
