import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./PublishRide.css";
import { Link } from "react-router-dom";
import Navbar from './nav'
import Footer from './Footer'

import { FiNavigation } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdDateRange, MdEventSeat } from "react-icons/md";
import { BiTime, BiEuro } from "react-icons/bi";
import { GiCarSeat } from "react-icons/gi";

export function PublishRide(props) {
  const [startlocation, setStartLocation] = useState("");
  const [targetlocation, setTargetLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selecttime, setSelectTime] = useState("");
  const [seatavailable, setSeatAvailable] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      startlocation,
      targetlocation,
      selectedDate,
      selecttime,
      seatavailable,
      price,
    };
    console.log(data);
    localStorage.setItem("publish", JSON.stringify(data));
    setStartLocation("");
    setTargetLocation("");
    setSelectedDate("");
    setSelectTime("");
    setSeatAvailable("");
    setPrice("");
    props.history.push("/RidePublished");
  };
  <h1>Publish Ride</h1>;

  return (
    <div>
      <Navbar />
      <div className="publish__ride">
    <form onSubmit={handleSubmit}>
      <h2>Publish Ride</h2>
      <input
        className="Start_2"
        type="text"
        placeholder="Start Location"
        value={startlocation}
        onChange={(e) => setStartLocation(e.target.value)}
      />
      <GoLocation />
      <input
        className="End_2"
        type="text"
        placeholder="Target Location"
        value={targetlocation}
        onChange={(e) => setTargetLocation(e.target.value)}
      />
      <FiNavigation />
      <DatePicker
        className="date_2"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Select date"
      />
      <MdDateRange />
      <input
        type="text"
        className="time_2"
        placeholder="Enter starting time"
        value={selecttime}
        onChange={(e) => setSelectTime(e.target.value)}
      />
      <BiTime />
      <input
        type="text"
        className="seat_2"
        placeholder="Seats available"
        value={seatavailable}
        onChange={(e) => setSeatAvailable(e.target.value)}
      />
      <MdEventSeat />
      <input
        type="text"
        className="price_2"
        placeholder="Enter price per seat"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <BiEuro />
      <input type="checkbox" className="check_2" name="" id="" />
      <GiCarSeat />
      I'm willing to offer to drive
      <Link to="/RidePublished">
        <input class="Submit_2" type="submit" value="Submit" />
      </Link>
    </form>
    </div>
    <Footer />
    </div>
  );
}

export default PublishRide;
