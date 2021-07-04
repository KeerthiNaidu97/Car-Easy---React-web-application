import React from "react";
import "./PaymentMethod.css";
import Navbar from "./nav";
import Footer from "./Footer";

function PaymentMethod(props) {
  return (
    <div>
    <Navbar />
    <div className="page1">
      <div className="page1_image">
        <img src="undraw_online_payments_luau.png" id="p1_image" />
      </div>
      <div className="container1">
        <p>Payment Methods</p>
        <hr />
        <ul>
          <li>
            <button className="Visa" onClick={() => props.history.push("/cardpayment")}>Visa/Master Card</button>
          </li>
          <hr />
          <li>
            <button className="BAcc" onClick={() => props.history.push("/bankaccount")}>Bank Account</button>
          </li>
          <hr />
          <li>
            <button className="Cash" onClick={() => props.history.push("/thankyou")}>Pay in Cash</button>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default PaymentMethod;
