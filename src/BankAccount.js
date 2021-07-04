import React, { Component } from "react";
import "./BankAccount.css";
import Navbar from './nav'
import Footer from './Footer'
import {Link} from 'react-router-dom';

class BankAccount extends Component {
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
      <div className="main_page1">
        {/* <div className="page_image">
          <img src="undraw_online_payments_luau.png" id="p_image" />
        </div> */}

        <div className="container">
          <label id="lprice">Price</label>
          <input type="text" className="price"></input>
          <div>
            <label>Name</label>
            <br />
            <input
              type="text"
              className="Name"
              placeholder="Enter your name "
              value={name}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            <label>IBAN </label>
            <br />
            <input
              type="text"
              className="iban"
              placeholder="Enter your IBAN number"
              value={iban}
              onChange={this.handleIbanChange}
            />
          </div>
          <div>
            <label>BIC </label>
            <br />
            <input
              type="text"
              className="bic"
              placeholder="Enter BIC"
              value={bic}
              onChange={this.handleBicChange}
            />
          </div>
          <div className="paybtn">
            <button id="pbtn"><Link to ="/thankyou">Pay Now</Link></button>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default BankAccount;
