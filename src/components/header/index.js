import React from "react";
import Logo from "../../assets/florania.png";
import Profile from "../../assets/profile.png";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <a href="/" className="logo">
            <img src={Logo} alt="logo" />
          </a>
          <ul className="navbar">
            <li>
              <a href="#hero-section">Home</a>
            </li>
            <li>
              <a href="#inspiration">Inspiration</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <img src={Profile} alt="#" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
