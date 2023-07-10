import "./Checkout.css";
import React, { useState } from "react";
import Footer from "../folder/Footer";
function Checkout({ cartList, total }) {
  const goBack = () => {
    window.history.back();
  };
  const [select, setSelect] = useState(null);
  const handleOptionChange = (e) => {
    setSelect(e.target.innerText);
  };
  let grandTotal = total + 50;
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
        <div
          className="deliver"
          onClick={handleOptionChange}
          style={
            select === "Cash on Delivery" ? { border: "1px solid #D87D4A" } : {}
          }
        >
          <input
            type="radio"
            className="radio"
            name="input"
            checked={select === "Cash on Delivery"}
          />
          <label
            className="e-mone"
            for="radio"
            style={
              select === "Cash on Delivery"
                ? { backgroundColor: "#D87D4A" }
                : {}
            }
          ></label>
          Cash on Delivery
        </div>
        <div
          className="e-mon"
          onClick={handleOptionChange}
          style={select === "e-Money" ? { border: "1px solid #D87D4A" } : {}}
        >
          <input
            type="radio"
            className="radio"
            name="input"
            checked={select === "e-Money"}
          />
          e-Money
          <label
            for="radio"
            className="e-mone-sec"
            style={select === "e-Money" ? { backgroundColor: "#D87D4A" } : {}}
          ></label>
        </div>
        <div className="emoney-div">
          <div className="opt-one">
            <label className="opt-emon-lab">e-Money Number</label>
            <input type="text" placeholder="238521993" />
          </div>
          <div className="opt-two">
            <label className="opt-emon-lab">e-Money PIN</label>
            <input type="text" placeholder="6891" />
          </div>
        </div>
      </div>
      <section className="summery">
        <h1 className="sum-title">SUMMERY</h1>
        <div>
          {cartList.map((item, index) => (
            <div key={index} className="cart-div">
              <div className="img-head-cost">
                <img src={item.image} alt={item.title} className="cart-img" />
                <div className="title-price-cart">
                  <p className="cart-title">{item.title}</p>
                  <p className="cart-num">${item.price}</p>
                </div>
                <p className="checkout-amount">{item.amount}x</p>
              </div>
            </div>
          ))}
        </div>
        <div className="sum-prices">
          <div className="total-prise">
            <p>TOTAL</p>
            <p className="b-prise">${total}</p>
          </div>
          <div className="shipping-add">
            <p>SHIPPING</p>
            <p className="ship-add">$50</p>
          </div>
          <div className="grand-add">
            <p>GRAND TOTAL</p>
            <p className="grand">{grandTotal}</p>
          </div>
        </div>
        <button type="button" className="summery-btn">
          CONTINUE & PAY
        </button>
      </section>
      <Footer />
    </div>
  );
}
export default Checkout;
