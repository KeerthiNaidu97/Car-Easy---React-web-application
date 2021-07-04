import React from 'react';
import './App.css';
import Navbar from "./nav";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import FindRide from './findRide'
import RequestRide from './RequestRide'
import SearchRide from './SearchRide'
import MyRides from "./MyRides";
import Register from "./Register"
import Profile from "./Profile"
import Payment from "./PaymentMethod"
import CardPayment from "./CardPayment"
import BankAccount from "./BankAccount"
import ThankYou from "./ThankYou"
import User from "./User"
import PublishRide from "./PublishRide"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} exact={true} />
          <Route path="/findride" component={FindRide} exact={true} />
          <Route path="/requestride" component={RequestRide} exact={true} />
          <Route path="/SearchRide" component={SearchRide} exact={true} />
          <Route path="/myrides" component={MyRides} exact={true} />
          <Route path="/register" component={Register} exact={true} />
          <Route path="/profile" component={Profile} exact={true} />
          <Route path="/payment" component={Payment} exact={true} />
          <Route path="/cardpayment" component={CardPayment} exact={true} />
          <Route path="/bankaccount" component={BankAccount} exact={true} />
          <Route path="/thankyou" component={ThankYou} exact={true} />
          <Route path="/publishride" component={PublishRide} exact={true} />
          <Route path="/user" component={User} exact={true} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
