import React, { useEffect, useState } from "react";
import "./land.css";
import WOW from "wowjs";
import cv from "./Ahmed.Salama.pdf";
import Up from "../up/up";
import system from '../../system.json'
const Land = () => {
  const sections = document.querySelectorAll(".port");
  const [scrollPosition, setscrollPosition] = useState();
  const [currentId, setcurrentId] = useState("");
  const activeLink = () => {
    const link = document.querySelectorAll(".land img");
    link.forEach((act) => {
      act.addEventListener("click", function () {
        link.forEach((btn) => btn.classList.remove("activelink"));
        this.classList.add("activelink");
      });
    });
  };
  const removeAllActiveClasses = () => {
    document.querySelectorAll(".land img").forEach((el) => {
      el.classList.remove("activelink");
    });
  };
  const addActiveClass = (id) => {
    let selector = `.land ul li a[href="#${id}"] img`;
    document.querySelector(selector).classList.add("activelink");
  };
  useEffect(() => {
    activeLink();
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setscrollPosition(document.documentElement.scrollTop);
      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
          scrollPosition <
            section.offsetTop +
              section.offsetHeight -
              section.offsetHeight * 0.25
        ) {
          setcurrentId(section.attributes.id.value);
          removeAllActiveClasses();
          addActiveClass(currentId);
        }
      });
    });
  }, [scrollPosition]);
  return (
    <>
      {" "}
      <Up />
      <div className="land port" id="home">
        <a href={cv} className="cv" data-wow-duration="2s" download alt="cv">
          Download Cv
        </a>
        <div className="in">
          <div className="wrapper">
            <div className="static-txt">
              <h4 className="wow fadeInDown" data-wow-duration="2s">
                {system.data.intro.welcome}
              </h4>
              <h1 className="wow fadeIn" data-wow-duration="4s">
              {system.data.intro.name}
              </h1>
            </div>
            <div className="dynamic-txt">
              <h1 id="txt">
              {system.data.intro.jobtitle}<span>{system.data.intro.technology}</span>
              </h1>
            </div>
          </div>
          <div className="wow fadeInUp img" data-wow-duration="2s">
            <img src="img/photo_2022-09-09_15-36-01.jpg" alt="pr" />
          </div>
        </div>
        <div className="navbarr">
          <ul className="wow fadeInRight" data-wow-duration="2s">
            <li>
              <a href="#home">
                <img className="activelink" src="img/home-svgrepo-com.svg" alt="home" />
              </a>
            </li>
            <li>
              <a href="#about">
                <img src="img/profile-about-mobile-ui-svgrepo-com.svg" alt="about" />
              </a>
            </li>
            <li>
              <a href="#skills">
                <img src="img/task-svgrepo-com.svg" alt="skills" />
              </a>
            </li>
            <li>
              <a href="#projects">
                <img src="img/map-svgrepo-com.svg" alt="projects" />
              </a>
            </li>
            <li>
              <a href="#contact">
                <img src="img/contact-svgrepo-com.svg" alt="contact" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Land;
