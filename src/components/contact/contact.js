import React, { useRef, useState, useEffect } from "react";
import "./contact.css";
import WOW from "wowjs";
import emailjs from "@emailjs/browser";
import system from '../../system.json'
const Contact = () => {
  const form = useRef();
  const [sent, setsent] = useState(false);
  const [errorr, seterrorr] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6q2fkli",
        "template_2163qlg",
        form.current,
        "ei50mtNo7k88ZUQR6"
      )
      .then(
        (result) => {
          setsent(true);
          document.getElementById("sc").style.display = "block";
        },
        (error) => {
          seterrorr(true);
          document.getElementById("er").style.display = "block";
        }
      );
  };
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, [sent, errorr]);
  return (
    <div className="contact port" id="contact">
      <h1
        className="text-center"
        style={{ color: "#faa403", fontWeight: "bold", margin: "20px 0px" }}
      >
        Contact
      </h1>

      <div className="con">
        <div className="email">
          <img src="img/email-svgrepo-com.svg" alt="email" />

          <a href={`mailto:${system.data.contact.email}`}>
            <h2>Click to send a message</h2> {system.data.contact.email}
          </a>
        </div>
        <div className="phone">
          <img src="img/phone-svgrepo-com.svg" alt="phone" />

          <a href={`https://wa.me/01066923650?text=`}>
            <h2>Click to send a message</h2> {system.data.contact.phone}
          </a>
        </div>
      </div>
      <hr />
      <form className="form" ref={form} onSubmit={sendEmail}>
        <input  type="text" name="from_name" placeholder="Enter your name" required />
        <input type="email" name="from_email" placeholder="Enter your email" required />
        <textarea placeholder="Enter your message" name="message"></textarea>
        <button type="submit">Send Message </button>
        <div id="sc" className="message wow bounceIn">
          Message was sent successfully
        </div>
        <div id="er" className="message wow bounceIn">
          Message was't sent
        </div>
      </form>
    </div>
  );
};

export default Contact;
