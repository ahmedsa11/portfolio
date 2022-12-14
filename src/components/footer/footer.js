import React, { useEffect } from "react";
import "./footer.css";
import WOW from "wowjs";
import system from '../../system.json'
const Footer = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      <div className="footer port" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center wow fadeInDown">Follow Me</h2>
              <ul>
                <li className="wow fadeInLeft"data-wow-duration="2s">
                  <a href="https://github.com/ahmedsa11">
                    <img src="img/github-sign.png" alt="git" />
                  </a>
                </li>
                <li className="wow fadeInRight"data-wow-duration="2s">
                  <a href="https://www.linkedin.com/in/ahmed-salama-a18b48200">
                    <img src="img/linkedin-logo.png" alt="li" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center">{system.data.copyright} &copy;</p>
      </div>
    </>
  );
};

export default Footer;
