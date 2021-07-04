import React,{useEffect,useState} from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";

 
function Nav(props) {
    const [token,setToken] = useState(false)
    
    useEffect(()=>{
        if(localStorage.getItem('login')){
          setToken(true)
        }
      },[token])
    
      return (
        <div className="nav">
            <div className="img">
                <img src="logo1.png" alt="logo" id="logo" />
            </div>
            <div className="nav1">
               <div>
                   <ul>
                        <li><Link to ="/">Home</Link></li>
                        <li><Link to="/findride">Find Ride</Link></li>
                        <li><Link to="/publishride">Publish ride</Link></li>
                        {
                        token ? (<li><Link to="/profile"><img src="/user.png" alt="user" id="user" /></Link></li>) : (<li><Link to="/login">Login</Link></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
 
export default Nav;