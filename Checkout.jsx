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
    <div className="whole-checkout">
      <p className="back" onClick={goBack}>
        Go Back
      </p>
      <div className="mainCheckout">
      <h1 className="checkout-title same">CHECKOUT</h1>
      <div className="billing-div">
        <h6 className="billing">Billing details</h6>
        <div className="name-div inputdiv">
          <label className=" same">Name</label>
          <input
            className="inp-name input"
            type="text"
            placeholder="Alexei Ward"
          />
        </div>
        <div className="email-div  inputdiv">
          <label className=" same">Email</label>
          <input
            className="inp-email input"
            type="email"
            placeholder="alexei@mail.com"
          />
        </div>
        <div className="num-div  inputdiv">
          <label className=" same">Phone Number</label>
          <input
            className="inp-num input"
            type="text"
            placeholder="+1 202-555-0136"
          />
        </div>
      </div>
      <div className="shipping-div ">
        <h6 className="shipping">shipping info</h6>
        <div className="name-div  inputdiv">
          <label className=" same">Your Address</label>
          <input
            className="inp-adr input"
            type="text"
            placeholder="1137 Williams Avenue"
          />
        </div>
        <div className="zip-div  inputdiv ">
          <label className=" same">ZIP Code</label>
          <input
            className="inp-zip input"
            type="text"
            placeholder="10001"
            maxLength={5}
          />
        </div>
        <div className="city-div inputdiv">
          <label className=" same">City</label>
          <input
            className="inp-city input"
            type="text"
            placeholder="New York"
          />
        </div>
        <div className="country-div  inputdiv">
          <label className=" same">Country</label>
          <input
            className="inp-country input"
            type="text"
            placeholder="United States"
          />
        </div>
      </div>
      <div className="payment-div">
        <h6 className="payment">payment details</h6>
        <p className="method  same">Payment Method</p>
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
          <div
            className="e-mone  same"
            for="radio"
            style={
              select === "Cash on Delivery"
                ? { backgroundColor: "#D87D4A" }
                : {}
            }
          ></div>
          Cash on Delivery
        </div>
        <div
          className="e-mon  same"
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
          <div
            for="radio"
            className="e-mone-sec"
            style={select === "e-Money" ? { backgroundColor: "#D87D4A" } : {}}
          ></div>
        </div>
        <div className="emoney-div">
          <div className="opt-one inputdiv">
            <label className="opt-emon-lab  same">e-Money Number</label>
            <input type="text" placeholder="238521993" />
          </div>
          <div className="opt-two inputdiv">
            <label className="opt-emon-lab  same">e-Money PIN</label>
            <input type="text" placeholder="6891" />
          </div>
        </div>
      </div>
      <section className="summery">
        <h1 className="sum-title  same">SUMMERY</h1>
        <div>
          {cartList.map((item, index) => (
            <div key={index} className="cart-div carTlist">
              <div className="img-head-cost  carTlist">
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
          <div className="total-prise sum-div">
            <p className="total-left same">TOTAL</p>
            <p className="ship-add  same">${total}</p>
          </div>
          <div className="shipping-add sum-div">
            <p className="total-left same">SHIPPING</p>
            <p className="ship-add  same">$50</p>
          </div>
          <div className="grand-add sum-div">
            <p className="total-left same">GRAND TOTAL</p>
            <p className="grand  same">${grandTotal}</p>
          </div>
        </div>
        <button type="button" className="summery-btn">
          CONTINUE & PAY
        </button>
      </section>
      </div>
      <Footer />
    </div>
  );
}
export default Checkout;
