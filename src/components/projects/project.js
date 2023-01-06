import React from "react";
import "./project.css";
import system from '../../system.json'
const Project = () => {
  return (
    <>
      <h1
        className="text-center"
        style={{ color: "#faa403", fontWeight: "bold", margin: "20px 0px" }}
      >
        Projects
      </h1>
      <div className="projects port" id="projects">
        {system.data.projects.map((item,idx)=>{
          return(
            <div key={idx} className="cardd">
            <div className="img">
              <img src={item.img?item.img:null} alt="d" />
            </div>
            <div className="info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <hr />
            <div className="button">
              <a href={item.live}>Live Demo</a>
              <a href={item.github}>GitHub</a>
            </div>
          </div>
          )
        })}

      </div>
    </>
  );
};

export default Project;
