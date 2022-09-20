import React, { useEffect } from "react";
import "./skills.css";
import WOW from "wowjs";
import r1 from "../../img/right-svgrepo-com.svg";
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
                      Faculty of Computer and Informatics-Suez Canal University  </p>
                      <hr />
                      <p>Bachelor's Degree,Computer Science department (2022)</p>  
                      <hr />
                      <p> Overall rating: ( Very Good ) </p>  <hr />
                      <p> Project Grad: ( A+ )</p> 
                  
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
                    <h3>Front-End </h3>
                    <p>Up to one year work with react js {"&"} vanilla js</p>
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
                          <li>
                            <img src={r1} alt="d" />
                            Html
                          </li>
                          <li>
                            <img src={r1} alt="d" /> Css
                          </li>
                          <li>
                            <img src={r1} alt="d" /> Bootstrap
                          </li>
                          <li>
                            <img src={r1} alt="d" /> Sass
                          </li>
                          <li>
                            <img src={r1} alt="d" /> Java script
                          </li>
                          <li>
                            <img src={r1} alt="d" /> React js
                          </li>
                          <li>
                            <img src={r1} alt="d" /> Redux toolkit
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="sk">
                          <li>
                            <img src={r1} alt="d" /> Next js
                          </li>
                          <li>
                            <img src={r1} alt="d" /> Socket.io
                          </li>
                          <li>
                            <img src={r1} alt="d" /> APIS
                          </li>
                          <li>
                            <img src={r1} alt="d" /> Oop
                          </li>
                          <li>
                            <img src={r1} alt="d" /> Ajax
                          </li>
                          <li>
                            <img src={r1} alt="d" /> unity testing
                          </li>
                          <li>
                            <img src={r1} alt="d" /> Git/Git hub
                          </li>
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
                    <li>
                      <img src={r1} alt="d" />
                      COMMUNICATION
                    </li>
                    <li>
                      <img src={r1} alt="d" />
                      PRESENTATION
                    </li>
                    <li>
                      <img src={r1} alt="d" />
                      Effective Time Managment
                    </li>
                    <li>
                      <img src={r1} alt="d" />
                      DESISION-MAKING
                    </li>
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
