import React from "react";
import "./Registration.css";
import Twitter from "@material-ui/icons/Twitter";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsLock } from "react-icons/bs";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Person from "@material-ui/icons/PersonOutlineOutlined";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";

function Registration(props) {
  return (
    <div className="register">
      <hr />
      <h2>Create an Account</h2>
      <p>Sign up with your social media account</p>
      <div className="social">
        <Twitter id="Twitter" />
        <AiFillFacebook id="Facebook" />
        <FcGoogle id="Google" />
      </div>
      <h5>
        <button id="or" disabled>
          or
        </button>
      </h5>
      <ul>
        <li>
          <Person id="Person" />
          <input type="text" placeholder="Username"></input>
        </li>

        <li>
          <AlternateEmailOutlinedIcon id="Person" />
          <input type="text" placeholder="Email"></input>
        </li>

        <li>
          <LockOutlined id="lock" />
          <input type="password" placeholder="Password"></input>
        </li>

        <li>
          <LockOutlined id="lock" />
          <input type="password" placeholder="Confirm password"></input>
        </li>
      </ul>
      <div className="reg_btn">
        <button id="rbtn" onClick={() => props.history.push("/login")}>Register</button>
      </div>
    </div>
  );
}

export default Registration;