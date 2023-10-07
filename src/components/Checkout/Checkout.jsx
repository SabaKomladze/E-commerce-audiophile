import "./Checkout.css";
import React, { useState } from "react";
import Footer from "../folder/Footer";

function Checkout({ cartList, total, setDone }) {
  const goBack = () => {
    window.history.back();
  };
  const [select, setSelect] = useState(null);
  const handleOptionChange = (e) => {
    setSelect(e.currentTarget.innerText);
  };
  const [email, setEmail] = useState("");
  const [emailVal, setEmailVal] = useState(true);
  let grandTotal = total + 50;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailCheck = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const emailValid = emailRegex.test(inputEmail);
    setEmailVal(emailValid);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setDone(true);
   
  };
  let toTop =  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
  return (
    <form className="whole-checkout" onSubmit={handleSubmit}>
      <p className="back" onClick={goBack}>
        Go Back
      </p>
      <div className="mainCheckout">
        <h1 className="checkout-title same">CHECKOUT</h1>
        <div className="billing-div">
          <h6 className="billing">Billing details</h6>
          <div className="name-email">
            <div className="name-div inputdiv">
              <label className=" same">Name</label>
              <input
                required
               
                type="text"
                placeholder="Alexei Ward"
              />
            </div>
            <div className="email-div  inputdiv">
              <label className=" same">Email</label>
              <input
                required
                className="inp-email input"
                onChange={emailCheck}
                value={email}
                style={{ borderColor: emailVal ? "initial" : "#ff0000" }}
                type="email"
                placeholder="alexei@mail.com"
              />
            </div>
          </div>
          <div className="num-div  inputdiv">
            <label className=" same">Phone Number</label>
            <input
              required
              
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
              required
             
              type="text"
              placeholder="1137 Williams Avenue"
            />
          </div>
          <div className="name-email">
            <div className="zip-div  inputdiv ">
              <label className=" same">ZIP Code</label>
              <input
                required
              
                type="text"
                placeholder="10001"
                maxLength={5}
              />
            </div>
            <div className="city-div inputdiv">
              <label className=" same">City</label>
              <input
                required
               
                type="text"
                placeholder="New York"
              />
            </div>
          </div>
          <div className="country-div  inputdiv">
            <label className=" same">Country</label>
            <input
              required
              
              type="text"
              placeholder="United States"
            />
          </div>
        </div>
        <div className="payment-div">
          <h6 className="payment">payment details</h6>
          <p className="method  same">Payment Method</p>
          <div className="options">
            <div
              className="deliver"
              onClick={handleOptionChange}
              style={
                select === "Cash on Delivery"
                  ? { border: "1px solid #D87D4A" }
                  : {}
              }
            >
              <input type="radio" className="radio" name="input" />
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
              style={
                select === "e-Money" ? { border: "1px solid #D87D4A" } : {}
              }
            >
              <input type="radio" className="radio" name="input" />
              e-Money
              <div
                for="radio"
                className="e-mone-sec"
                style={
                  select === "e-Money" ? { backgroundColor: "#D87D4A" } : {}
                }
              ></div>
            </div>
          </div>
          {select === "e-Money" ? (
            <div className="emoney-div name-email">
              <div className="opt-one inputdiv">
                <label className="opt-emon-lab  same">e-Money Number</label>
                <input type="text" placeholder="238521993" />
              </div>
              <div className="opt-two inputdiv">
                <label className="opt-emon-lab  same">e-Money PIN</label>
                <input type="text" placeholder="6891" />
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <section className="summery">
        <h1 className="sum-title  same">SUMMERY</h1>
        <div>
          {cartList.map((item, index) => (
            <div key={index} className="cart-div carTlist">
              <div className="img-head-cost  carTlist">
                <img src={item.image} alt={item.title} className="cart-img" />
                <div className="title-price-cart middle-title">
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
        <input type="submit" value={"CONTINUE & PAY"} className="summery-btn" onClick={()=>{
          toTop();
        }} />
      </section>
      <Footer />
    </form>
  );
}
export default Checkout;
