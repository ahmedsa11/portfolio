import React, { useEffect } from "react";
import "./skills.css";
import WOW from "wowjs";
import system from '../../system.json'
const Skills = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      <div className="skills port" id="skills">
        <div className="timeline">
          <h1
            className="text-center"
            style={{ color: "#faa403", fontWeight: "bold", margin: "20px 0px" }}
          >
            Education {"&"} Skills
          </h1>

          <div className="container">
            {/* <h1 className="main-title">About</h1> */}
            <div className="timeline-content">
              <div className="year">Education</div>
              <div className="right">
                <div className="content">
                  <div
                    className="wow animate__bounceInRight"
                    data-wow-duration="1s"
                    data-wow-offset="30"
                  >
                    <h3>Education</h3>
                    <p>
                      {system.data.aboutme.education[0]}  </p>
                      <hr />
                      <p>{system.data.aboutme.education[1]} </p>  
                      <hr />
                      <p>{system.data.aboutme.education[2]} </p>  <hr />
                      <p> {system.data.aboutme.education[3]} </p> 
                  
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="year">experience</div>
              <div className="left">
                <div className="content">
                  <div
                    className="wow animate__bounceInLeft"
                    data-wow-duration="1s"
                    data-wow-offset="30"
                  >
                    <h3>{system.data.aboutme.experience[0]} </h3>
                    <p>{system.data.aboutme.experience[1]} </p>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="year">Skills</div>
              <div className="right">
                <div className="content">
                  <div
                    className="wow animate__bounceInRight"
                    data-wow-duration="1s"
                    data-wow-offset="30"
                  >
                    <h3>Technical Skills</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="sk">
                          {system.data.aboutme.skills.TechnicalSkills1.map((sk,idx) =>{
                            return(
                              <li key={idx}>
                              <img src="img/right-svgrepo-com.svg" alt="d" />
                              {sk}
                            </li>
                            )
                          })}
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="sk">
                        {system.data.aboutme.skills.TechnicalSkills2.map((sk,idx) =>{
                            return(
                              <li key={idx}>
                              <img src="img/right-svgrepo-com.svg" alt="d" />
                              {sk}
                            </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="right">
                <div className="content">
                  <h3>Soft Skills</h3>
                  <ul className="sk">
                  {system.data.aboutme.skills.SoftSkills.map((sk,idx) =>{
                            return(
                              <li key={idx}>
                              <img src="img/right-svgrepo-com.svg" alt="d" />
                              {sk}
                            </li>
                            )
                          })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
