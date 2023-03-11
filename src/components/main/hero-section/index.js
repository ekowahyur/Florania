import React from "react";
import Groundcover from "./assets/groundcover.png";
import Vines from "./assets/vines.png";
import Directional from "./assets/directional.png";
import Shade from "./assets/shade.png";
import Plants from "./assets/plants.png";
import Vegetable from "./assets/vegetable.png";
import "./style.css";

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero-section">
      <div className="container">
        <div className="row">
          <div className="hero-text">
            <h3>GET TO KNOW YOURSELF</h3>
            <h2>SOME GARDEN STUFF</h2>
          </div>
          <div className="hero-banner">
            <div className="groundcover">
              <img src={Groundcover} alt="groundcover" />
              <div className="banner-text">
                <p>GROUNDCOVER</p>
                <div className="hover-text">
                  <p>So small but able to cover the whole ground vividly</p>
                </div>
              </div>
            </div>
            <div className="vines">
              <img src={Vines} alt="vines" />
              <div className="banner-text">
                <p>VINES & VENCE</p>
                <div className="hover-text">
                  <p>These make your house like a wonderland</p>
                </div>
              </div>
            </div>
            <div className="directional">
              <img src={Directional} alt="directional" />
              <div className="banner-text">
                <p>DIRECTIONAL</p>
                <div className="hover-text">
                  <p>Bounch of trees that visually directs your eyes</p>
                </div>
              </div>
            </div>
            <div className="shade">
              <img src={Shade} alt="shade" />
              <div className="banner-text">
                <p>SHADE</p>
                <div className="hover-text">
                  <p>Big gentle trees to cover your windows</p>
                </div>
              </div>
            </div>
            <div className="plants">
              <img src={Plants} alt="plants" />
              <div className="banner-text">
                <p>PLANTS & FLOWER</p>
                <div className="hover-text">
                  <p>Decoration material, easier to keep, eye catching</p>
                </div>
              </div>
            </div>
            <div className="vegetable">
              <img src={Vegetable} alt="vegetable" />
              <div className="banner-text">
                <p>VEGETABLE & FRUIT</p>
                <div className="hover-text">
                  <p>Who doesn’t love to play Harvest Moon?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
