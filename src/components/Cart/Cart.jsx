import "./Cart.css";
import React, { useEffect, useState } from "react";
function Cart({ cartList, setCartList }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cartList.reduce(
      (sum, item) => sum + item.amount * item.price,
      0
    );
    setTotal(newTotal);
  }, [cartList]);
  const removeAllItems = () => {
    setCartList([]);
  };
  return (
    <div className="whole-cart">
      <div className="cart-remove">
        <p className="cart-num">Cart ({cartList.length})</p>
        <p className="remove" onClick={removeAllItems}>
          Remove all
        </p>
      </div>
      <div>
        {cartList.map((item, index) => (
          <div key={index} className="cart-div">
            <div className="img-head-cost">
              <img src={item.image} alt={item.title} className="cart-img" />
              <div className="title-price-cart">
                <p className="cart-title">{item.title}</p>
                <p className="cart-num">${item.price}</p>
              </div>
            </div>
            <div className="num-cart">
              <p
                className="min"
                onClick={() => {
                  if (item.amount === 0) {
                    item.amount = 0;
                  } else {
                    const clone = [...cartList];
                    clone[index].amount--;
                    setCartList(clone);
                  }
                }}
              >
                -
              </p>
              <p className="digit">{item.amount}</p>
              <p
                className="plus"
                onClick={() => {
                  const clone = [...cartList];
                  clone[index].amount++;
                  setCartList(clone);
                }}
              >
                +
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <p className="total-tit">Total</p>
        <p className="total-num">${total}</p>
      </div>
      <button type="button" className="checkout">
        CHECKOUT
      </button>
    </div>
  );
}

export default Cart;
