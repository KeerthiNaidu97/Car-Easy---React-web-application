import React from "react";
import "./ThankYou.css";
import Navbar from './nav'
import Footer from './Footer'

function ThankYou() {
  return (
    <div>
      <Navbar />
    <div className="ty">
      <div className="ty_img">
        <img src="undraw_season_change_f99v.png" id="ty_image" />
      </div>
      <p>Your ride is on it's way.....</p>
    </div>
    <Footer />
    </div>
  );
}

export default ThankYou;
