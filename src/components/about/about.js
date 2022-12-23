import React from "react";
import "./about.css";
import system from '../../system.json'
const About = () => {
  return (
    <>
    <div className="about port"id="about">
      <h1 className="text-center" style={{color:"#faa403",fontWeight:"bold",margin:"20px 0px"}}>About</h1>
      <div id="article_container">
        <div className="article_container_img"></div>
        <div className="article_container_content">
          <div className="the">
            <div className="line"></div>
            <h4>{system.data.intro.name}</h4>
            <div className="line"></div>
          </div>
          <h1>About Me</h1>
          <div className="divider"></div>
          <p>{system.data.aboutme.description}
          </p>
        </div>
      </div>
      
    </div>
    <div className="clear"></div>
    </>
  );
};

export default About;
