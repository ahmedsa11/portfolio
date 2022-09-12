import React from "react";
import "./project.css";
import im1 from "../../img/la.png";
import im2 from "../../img/custmer-review_DJLRSDP0024-removebg-preview.png";
import im3 from "../../img/16_iday.svg";
import im4 from "../../img/0001-removebg-preview.png"
import im5 from '../../img/cronjob-reminder-removebg-preview.png'
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
            <h3>Connect</h3>
            <p>Social Communication System for Deaf-mute and Normal people</p>
          </div>
          <hr />
          <div className="button">
            <a href="https://frontend-react-salama.herokuapp.com/">Live Demo</a>
            <a href="https://github.com/ahmedsa11/projectgraduation">GitHub</a>
          </div>
        </div>
        <div className="cardd">
          <div className="img">
            <img src={im2} alt="d" />
          </div>
          <div className="info">
            <h3>eCommerce</h3>
            <p>A online store for a jewelry company Using(Next js,Redux)</p>
          </div>
          <hr />
          <div className="button">
            <a href="https://e-commerce-tan-two.vercel.app/">Live Demo</a>
            <a href="https://github.com/ahmedsa11/eCommercee">GitHub</a>
          </div>
        </div>
        <div className="cardd">
          <div className="img">
            <img src={im3} alt="d" />
          </div>
          <div className="info">
            <h3>Weather App</h3>
            <p>
              A simple application that the user enters the country, then the
              city, and then displays the weather condition through Apis
              Using(React js )
            </p>
          </div>
          <hr />
          <div className="button">
            <a href="https://weather-app-dusky-psi.vercel.app/">Live Demo</a>
            <a href="https://github.com/ahmedsa11/weather-app">GitHub</a>
          </div>
        </div>
        <div className="cardd">
          <div className="img">
            <img src={im4} alt="d" />
          </div>
          <div className="info">
            <h3> Furniture company</h3>
            <p>
              A furniture company that only displays products with great design
              Using (html,css,bootstrap)
            </p>
          </div>
          <hr />
          <div className="button">
            <a href="https://aletalya.vercel.app/">Live Demo</a>
            <a href="https://github.com/ahmedsa11/aletalya">GitHub</a>
          </div>
        </div>
        <div className="cardd">
          <div className="img">
            <img src={im5} alt="d" />
          </div>
          <div className="info">
            <h3>ReminderApp</h3>
            <p>
            The user enters the message and enters the time of the reminder, then shows him the 
remaining period Using (React js, redux)
            </p>
          </div>
          <hr />
          <div className="button">
            <a href="https://simple-reminder-app.vercel.app/">Live Demo</a>
            <a href="https://github.com/ahmedsa11/simple-reminderApp">GitHub</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
