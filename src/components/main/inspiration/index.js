import React from "react";
import FromGardener from "./assets/fromgardener.png";
import FromDesigner from "./assets/fromdesigner.png";
import LocalCommunity from "./assets/localcommunity.png";
import Shop from "./assets/shop.png";
import "./style.css";

const Inspiration = () => {
  return (
    <section className="inspiration" id="inspiration">
      <div className="container">
        <div className="row">
          <div className="inspiration-text">
            <h2>KEEP LEARNING AND GET INSPIRED</h2>
            <p>get yourself an update by learn from professional and experienced hobbist in your area. keep update your knowledge to make this gardening things feel more fun.</p>
          </div>
          <div className="inspiration-banner">
            <div className="from-gardener">
              <img src={FromGardener} alt="from-gardener" />
              <div className="banner-text">
                <p>From Gardener</p>
                <div className="hover-text">
                  <ul>
                    <li>get some tips</li>
                    <li>build a community</li>
                    <li>inspiring story</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="from-designer">
              <img src={FromDesigner} alt="from-designer" />
              <div className="banner-text">
                <p>From Designer</p>
                <div className="hover-text">
                  <ul>
                    <li>get some pro tips</li>
                    <li>learn from pro</li>
                    <li>be their cliens</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="local-community">
              <img src={LocalCommunity} alt="local-community" />
              <div className="banner-text">
                <p>Local Community</p>
                <div className="hover-text">
                  <ul>
                    <li>make some friends</li>
                    <li>learn stuff together</li>
                    <li>discuss some trends</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="online-offline-shop">
              <img src={Shop} alt="online-offline-shop" />
              <div className="banner-text">
                <p>Online/Offline Shop</p>
                <div className="hover-text">
                  <ul>
                    <li>look for your needs</li>
                    <li>buy some important gardening stuff</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
