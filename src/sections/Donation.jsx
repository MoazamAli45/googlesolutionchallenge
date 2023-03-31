import React from "react";
import SliderDonation from "../components/SliderDonation";
import "./Donation.css";
import { useState } from "react";
const Donation = () => {
  const [value, setValue] = useState("");
  const changeHandler = (event) => {
    setValue(event.target.value);
  };
  const submitHandler = () => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <section className="donation">
      <div className="donation__container">
        <div className="donation__content-1">
          <h3>Help for people</h3>
          <h2>Make a donation</h2>
          <SliderDonation value={value} />
          <div className="slider-text">
            <p>Raised: $15,000</p>
            <p className="goal">Goal: $20,000</p>
          </div>
        </div>
        <div className="donation-form">
          <div className="donation-card">
            <h4>Select Amount</h4>
            <h2>Enter Amount</h2>
            <form onSubmit={submitHandler}>
              <div className="form-content">
                <span>$</span>
                <input
                  type="number"
                  placeholder="Enter Amount"
                  min="0"
                  value={value}
                  onChange={changeHandler}
                />
              </div>
              <button className="donation-btn">Donate</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
