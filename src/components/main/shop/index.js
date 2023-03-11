import React, { useState } from "react";
import LocalLandscape from "./assets/locallandscape.png";
import LocalFarm from "./assets/localfarm.png";
import LearningSession from "./assets/learningsession.png";
import "./style.css";

const Shop = () => {
  const [hover, setHover] = useState(0);
  const [selectHover, setSelectHover] = useState(false);

  const handleHover = (index) => {
    setHover(index);
  };

  const handleMouseOut = () => {
    setHover(0);
  };

  const handleSelectHover = () => {
    setSelectHover(true);
  };

  const handleSelectMouseOut = () => {
    setSelectHover(false);
  };

  return (
    <section className="shop" id="shop">
      <div className="container">
        <div className="row">
          <div className="shop-text">
            <h2>DISCOVER MORE STUFF</h2>
            <p>We provide what you want to research and take notes about this kind of hobby. more inspirations coming soon.</p>
          </div>
          <div className="shop-banner">
            <div className="shop-banner-img">
              <div className={hover === 0 && !selectHover ? "img-default active" : "img-default"}>
                <img src={LocalLandscape} alt="locallandscape" />
              </div>
              <div className={hover === 1 ? "landscape-img active" : "landscape-img"}>
                <img src={LocalLandscape} alt="locallandscape" />
              </div>
              <div className={hover === 2 ? "farm-img active" : "farm-img"}>
                <img src={LocalFarm} alt="localfarm" />
              </div>
              <div className={hover === 3 ? "learning-img active" : "learning-img"}>
                <img src={LearningSession} alt="learningsession" />
              </div>
            </div>
            <div className="shop-select">
              <div
                className={hover === 1 ? "shop-select-landscape active" : "shop-select-landscape"}
                onMouseOver={() => handleHover(1)}
                onMouseOut={handleMouseOut}
                onMouseEnter={handleSelectHover}
                onMouseLeave={handleSelectMouseOut}>
                <h4>Local Landscape</h4>
                <p>Find your most related design to boost yours.</p>
              </div>
              <div
                className={hover === 2 ? "shop-select-farm active" : "shop-select-farm"}
                onMouseOver={() => handleHover(2)}
                onMouseOut={handleMouseOut}
                onMouseEnter={handleSelectHover}
                onMouseLeave={handleSelectMouseOut}>
                <h4>Local Farm/Garden</h4>
                <p>Visit your nearest to expand your knowledge.</p>
              </div>
              <div
                className={hover === 3 ? "shop-select-learning active" : "shop-select-learning"}
                onMouseOver={() => handleHover(3)}
                onMouseOut={handleMouseOut}
                onMouseEnter={handleSelectHover}
                onMouseLeave={handleSelectMouseOut}>
                <h4>Learning Session</h4>
                <p>Gain more knowledge to level up.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
