import React from 'react';
import Nav from './nav';
import Footer from './Footer';
import "./MyRides.css";

function MyRides() {
    return (
        <div className="myrides">
            <Nav />
            <div className="PreviousRidesContainer">
                <div className="PreviousRides">
                    <p>Today, 21:00<br />
                    Mannheim - Seckenheim<br />
                    8 Eur<br />
                    </p>
                    <hr />
                    <p>Jan 9,2021  21:00<br />
                    Mannheim - Berlin<br />
                    60 Eur<br /></p>
                    <hr />
                    <p>March 3,2021  6:00<br />
                    Mannheim - Cochem<br />
                    20 Eur<br /></p>
                </div>
                <img src="myrides.png" alt="MyRides" id="myridesImage" />
            </div>
            <Footer />
        </div>
    )
}

export default MyRides
