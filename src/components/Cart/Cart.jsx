import "./Cart.css";

function Cart({ cartList, count, setCount }) {
  return (
    <>
      <div className="cart-remove">
        <p className="cart-num">Cart</p>
        <p className="remove">Remove all</p>
      </div>
      <div>
        {cartList.map((item, index) => (
          <div key={index} className="cart-div">
            <img src={item.image} alt={item.title} className="cart-img" />
            <div className="title-price-cart">
              <p className="cart-title">{item.title}</p>
              <p className="cart-num">${item.amount}</p>
            </div>
            <div className="num-cart">
              <p
                className="min"
                onClick={() => {
                  if (count === 0) {
                    count = 0;
                  } else {
                    setCount(count - 1);
                  }
                }}
              >
                -
              </p>
              <p className="digit">{count}</p>
              <p
                className="plus"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
