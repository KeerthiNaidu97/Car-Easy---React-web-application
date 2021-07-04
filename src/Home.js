import React from 'react';
import "./Home.css";
import HomeInputs from "./HomeInputs";
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import GpsFixedOutlinedIcon from '@material-ui/icons/GpsFixedOutlined';
import Navbar from "./nav";
import Footer from "./Footer";


function home(props) {
    return (
        
        <div className="home">
            <Navbar />
            <div className="banner">
                <div className="tagline">
                    <h1>Easy quick and a fun<br />
                    way to <br /></h1>
                    <h1>commute.</h1>
                    <button className="register" onClick={() => props.history.push("/register")}>Register here</button>

                </div>
                <img src="image1.png" alt="CarPooling" id="image1" />
            </div>
            <div className="inputs">
                <HomeInputs placeholder="Leaving from..." iconName={RoomOutlinedIcon}/>
                <HomeInputs placeholder="Going to..." iconName={GpsFixedOutlinedIcon}/>
                <input type="date" />
                <button className="rideFind" onClick={() => props.history.push("/findride")}>Find a ride</button>
            </div>
            
            <div className="features">
                <h1>Our Features</h1>
                <div className="feature-cards">
                    <ul>
                        <li><img src="card1.png" alt="Feature 1" id="feature1" /><p>Request to Drive</p></li>
                        <li><img src="card2.png" alt="Feature 2" id="feature2" /><p>Seat Selection</p></li> 
                        <li><img src="card3.png" alt="Feature 3" id="feature3" /><p>Luggage Specification</p></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default home;
