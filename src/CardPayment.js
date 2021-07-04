import React, { Component } from "react";
import "./CardPayment.css";
import Navbar from "./nav";
import Footer from "./Footer";
import { Payment } from "@material-ui/icons";
import { AiFillPropertySafety } from "react-icons/ai";
import {Link} from 'react-router-dom';

class CardPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      iban: "",
      bic: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleIbanChange = (event) => {
    this.setState({
      iban: event.target.value,
    });
  };

  handleBicChange = (event) => {
    this.setState({
      bic: event.target.value,
    });
  };

  render() {
    const { name } = this.state;
    const { iban } = this.state;
    const { bic } = this.state;

    return (
      <div>
        <Navbar />
      <div className="main_page">
        <div className="page_image">
          <img src="undraw_Credit_card_re_blml.png" id="p_image" />
        </div>

        <div className="container">
          <label id="lprice">Price</label>
          <input type="text" className="price"></input>
          <div className="div1">
            <label>Card Number</label>
            <br />
            <input
              type="text"
              className="Cno"
              placeholder="Enter your card number "
              value={name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="div2">
            <label>MM/YY </label>
            <br />
            <input
              type="text"
              className="exp_date"
              placeholder="Enter expiry"
              value={iban}
              onChange={this.handleIbanChange}
            />
          </div>
          <div className="div3">
            <label>CVV </label>
            <br />
            <input
              type="text"
              className="cvv"
              placeholder="Enter CVV"
              value={bic}
              onChange={this.handleBicChange}
            />
          </div>
          <div className="paybtn">
            <button id="pbtn"><Link to ="/thankyou"> Pay Now</Link></button>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default CardPayment;
