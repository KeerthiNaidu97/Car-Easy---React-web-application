import React from "react";
import Navbar from './nav'
import Footer from './Footer'
import "./User.css";

function User() {
  return (
    <div>
      <Navbar />
    <div className="user">
            <h2>User Profile</h2>
            
      <div className="card">
                
        <img src="user.png" alt="ui" id="pi" />
                <p>Change profile photo</p>
        <div className="main">
          <ul id="label1">
            <li>
              <label id="lfn">First Name:</label>
            </li>
            <li>
              <label id="lemail">Email:</label>
            </li>
            <li>
              <label id="lpno">Phone Number:</label>
            </li>
            <li>
              <label id="lage">Age:</label>
            </li>
          </ul>
          <ul id="input1">
            <li>
              <input id="fn" type="text" />
            </li>
            <li>
              <input id="email" type="text" />
            </li>

            <li>
              <input id="pno" type="text" />
            </li>

            <li>
              <input id="age" type="text" />
            </li>
          </ul>

          <ul id="label2">
            <li>
              <label id="lln">Last Name:</label>
            </li>
            <li>
              <label id="lgender">Gender:</label>
            </li>
            <li>
              <label id="llicense">License:</label>
            </li>
          </ul>
          <ul id="input2">
            <li>
              <input id="ln" type="text" />
            </li>

            <li>
              <input id="gender" type="text" />
            </li>

            <li>
              <input id="license" type="text" />
            </li>
          </ul>
        </div>
                
        <div className="save_btn">
                    <button id="save">Save</button>
                  
        </div>
              
      </div>
          
    </div>
    <Footer />
</div>
    
  );
}

export default User;
