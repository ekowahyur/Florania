import React from "react";
import ContactBg from "./assets/contactbg.png";
import LogoBg from "./assets/floraniacontact.png";
import "./style.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-bg">
            <img src={ContactBg} alt="contact-bg" />
            <div className="logo-bg">
              <img src={LogoBg} alt="logo-bg" />
            </div>
            <div className="contact-bg-text">
              <p>Consult whatever you want</p>
              <div className="contact-us">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
