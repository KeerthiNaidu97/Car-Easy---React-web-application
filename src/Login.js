import React from "react";
import "./Login.css";
import Person from "@material-ui/icons/PersonOutlineOutlined";
import Twitter from "@material-ui/icons/Twitter";
import LockOutlined from "@material-ui/icons/LockOutlined";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Navbar from "./nav";
import Footer from "./Footer";

function Login(props) {
    const handleLogin = (e) => {
        localStorage.setItem('login','true')
        props.history.push("/profile")
    }
    return (
        <div>
            <Navbar />
                <div className="input_fields">
                    <h2>Login Here</h2>
                    <ul>
                        <li>
                            <Person id="Person" />
                            <input type="text" placeholder="Username"></input>
                        </li>

                        <li>
                            <LockOutlined id="Person"></LockOutlined>
                            <input type="password" placeholder="Password"></input>
                        </li>
                        <li>
                            <button id="login" onClick={handleLogin}>Login</button>
                        </li>
                        <li>
                            <h5 id="h05">
                            <button id="or" disabled>
                                or
                            </button>
                            </h5>
                        </li>
                    <p>Sign up with your social media account</p>
                    </ul>
                    <div className="social">
                    <Twitter id="Twitter" />
                    <AiFillFacebook id="Facebook" />
                    <FcGoogle id="Google" />
                 </div>
        </div>
            <Footer />
        </div>
    )
}

export default Login
