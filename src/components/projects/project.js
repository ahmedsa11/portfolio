import React from "react";
import "./project.css";
import im1 from "../../img/photo_2022-09-09_15-36-01.jpg";
const Project = () => {
  return (
    <>
          <h1
        className="text-center"
        style={{ color: "#faa403", fontWeight: "bold", margin: "20px 0px" }}
      >
        Projects
      </h1>
    <div className="projects" id="projects">

      <div className="cardd">
        <div className="img">
          <img src={im1} alt="d" />
        </div>
        <div className="info">
          <h3>name</h3>
        </div>
        <div className="button">
          <a href="#d">Live Demo</a>
          <a href="#d">GitHub</a>
        </div>
      </div>
      <div className="cardd">
        <div className="img">
          <img src={im1} alt="d" />
        </div>
        <div className="info">
          <h3>name</h3>
        </div>
        <div className="button">
          <a href="#d">Live Demo</a>
          <a href="#d">GitHub</a>
        </div>
      </div>
      <div className="cardd">
        <div className="img">
          <img src={im1} alt="d" />
        </div>
        <div className="info">
          <h3>name</h3>
        </div>
        <div className="button">
          <a href="#d">Live Demo</a>
          <a href="#d">GitHub</a>
        </div>
      </div>
      <div className="cardd">
        <div className="img">
          <img src={im1} alt="d" />
        </div>
        <div className="info">
          <h3>name</h3>
        </div>
        <div className="button">
          <a href="#d">Live Demo</a>
          <a href="#d">GitHub</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Project;
