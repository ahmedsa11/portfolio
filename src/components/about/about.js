import React from "react";
import "./about.css";
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
            <h4>Ahmed Salama</h4>
            <div className="line"></div>
          </div>
          <h1>About Me</h1>
          <div className="divider"></div>
          <p>
            Fresh graduate who is interested about Front End Developer (ReactJs)
            , Interested in learning web development, staying updated with the
            latest technologies in this field, seeking an opportunity to utilize
            my previous training experience, academic background, and my skills
            in web development as front-end developer
          </p>
        </div>
      </div>
      
    </div>
    <div className="clear"></div>
    </>
  );
};

export default About;
