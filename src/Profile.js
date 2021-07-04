import React from "react";
import "./Profile.css";
import Nav from './nav'
import Footer from './Footer'

function Profile(props) {
  return (
    <div>
      <Nav />
    <div className="button1">
      <div className="button1__info">
        <ul>
          <li>
            <button id="pro" onClick={() => props.history.push("/user")}>My Profile</button>
          </li>
          <li>
            <button id="ride" onClick={() => props.history.push("/myrides")}>My Rides</button>
          </li>
          <li>
            <button id="pub">Published Rides</button>
          </li>
          <li>
            <button id="log_out" onClick={() => props.history.push("/")}>Logout</button>
          </li>
        </ul>
      </div>
      <div className="pro_image">
        <img src="user.png.png" alt="image" id="user" />
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Profile;
