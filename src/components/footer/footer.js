import React, { useEffect } from "react";
import "./footer.css";
import git from "../../img/github-sign.png";
import WOW from "wowjs";
import li from "../../img/linkedin-logo.png";
const Footer = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      <div className="footer" id="contact">
        <div className="container">
          <div className="row">
            <div class="col-md-12">
              <h2 className="text-center wow fadeInDown">Follow Me</h2>
              <ul>
                <li className="wow fadeInLeft"data-wow-duration="2s">
                  <a href="https://github.com/ahmedsa11">
                    <img src={git} alt="git" />
                  </a>
                </li>
                <li className="wow fadeInRight"data-wow-duration="2s">
                  <a href="https://www.linkedin.com/in/ahmed-salama-a18b48200">
                    <img src={li} alt="li" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center">Created By Ahmed Salama &copy; 2022</p>
      </div>
    </>
  );
};

export default Footer;
