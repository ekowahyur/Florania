import React, { useState } from "react";
import Arrow from "../../assets/arrow.png";
import IG from "../../assets/ig.png";
import YT from "../../assets/yt.png";
import TWT from "../../assets/twt.png";
import "./style.css";

const Footer = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-address">
            <h2>FLORANIA</h2>
            <h5>KutuDukuh, Sleman, Yogyakarta, Indonesia</h5>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <h4>&copy;2023 Florania. All rights reserved</h4>
          </div>
          <div className="footer-info">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Career</a>
              </li>
            </ul>
          </div>
          <div className="footer-community">
            <p>Join Our Communities</p>
            <div className="email-form">
              <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleChange} placeholder="Enter your email" />
                <button type="submit">
                  <img src={Arrow} alt="submit-arrow" />
                </button>
              </form>
            </div>
            <div className="social-media">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <img src={IG} alt="instagram" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <img src={YT} alt="youtube" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <img src={TWT} alt="twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
