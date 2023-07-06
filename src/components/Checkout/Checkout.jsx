import "./Checkout.css";
import React, { useState } from "react";
function Checkout() {
  const goBack = () => {
    window.history.back();
  };
  const [select, setSelect] = useState(null);
  const handleOptionChange = (e) => {
    setSelect(e.target.innerText);
    console.log(e.target.innerText);
  };

  return (
    <div>
      <p className="back" onClick={goBack}>
        Go Back
      </p>
      <h1 className="checkout-title">CHECKOUT</h1>
      <div className="billing-div">
        <h6 className="billing">Billing details</h6>
        <div className="name-div">
          <label>Name</label>
          <input
            className="inp-name input"
            type="text"
            placeholder="Alexei Ward"
          />
        </div>
        <div className="email-div">
          <label>Email</label>
          <input
            className="inp-email input"
            type="email"
            placeholder="alexei@mail.com"
          />
        </div>
        <div className="num-div">
          <label>Phone Number</label>
          <input
            className="inp-num input"
            type="number"
            placeholder="+1 202-555-0136"
          />
        </div>
      </div>
      <div className="shipping-div">
        <h6 className="shipping">shipping info</h6>
        <div className="name-div">
          <label>Your Address</label>
          <input
            className="inp-adr input"
            type="text"
            placeholder="1137 Williams Avenue"
          />
        </div>
        <div className="zip-div ">
          <label>ZIP Code</label>
          <input className="inp-zip input" type="number" placeholder="10001" />
        </div>
        <div className="city-div">
          <label>City</label>
          <input
            className="inp-city input"
            type="text"
            placeholder="New York"
          />
        </div>
        <div className="country-div">
          <label>Country</label>
          <input
            className="inp-country input"
            type="text"
            placeholder="United States"
          />
        </div>
      </div>
      <div className="payment-div">
        <h6 className="payment">payment details</h6>
        <p className="method">Payment Method</p>
        <div className="deliver" onClick={handleOptionChange}>
          <input
            type="radio"
            className="radio"
            name="input"
            checked={select === "Cash on Delivery"}
          />
          <label className="e-mone" for="radio"></label>
          Cash on Delivery
        </div>
        <div className="e-mon" onClick={handleOptionChange}>
          <input
            type="radio"
            className="radio"
            name="input"
            checked={select === "e-Money"}
          />
          e-Money
          <label for="radio" className="e-mone"></label>
        </div>
      </div>
    </div>
  );
}
export default Checkout;
