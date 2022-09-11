import React, { useRef, useState, useEffect } from "react";
import "./contact.css";
import email from "../../img/email-svgrepo-com.svg";
import WOW from "wowjs";
import phone from "../../img/phone-svgrepo-com.svg";
import emailjs from "@emailjs/browser";
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
    <div className="contact" id="contact">
      <h1
        className="text-center"
        style={{ color: "#faa403", fontWeight: "bold", margin: "20px 0px" }}
      >
        Contact
      </h1>

      <div className="con">
        <div className="email">
          <img src={email} alt="email" />

          <a href="mailto:Ahmedsa122333@gmail.com">
            <h2>send a message</h2> Ahmedsa122333@gmail.com
          </a>
        </div>
        <div className="phone">
          <img src={phone} alt="phone" />

          <a href="https://wa.me/01066923650?text=">
            <h2>send a message</h2> +201066923650
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
