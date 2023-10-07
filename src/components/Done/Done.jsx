import "./Done.css";
function Done({ cartList, setDone, total }) {
  let numOfItems = cartList.length - 1;
  return (
    <div className="done-div">
      <img
        src="../assets/checkout/icon-order-confirmation.svg"
        alt="confirm logo"
        className="confirm"
      />
      <h1 className="thanks done-text">THANK YOU FOR YOUR ORDER</h1>
      <p className="email-recive done-text">
        You will receive an email confirmation shortly.
      </p>
      <div className="bought">
        <div className="done-list">
          {cartList.length > 0 && (
            <div className="cart-div carTlist cartDiv">
              <div className="img-head-cost  carTlist">
                <img
                  src={cartList[0].image}
                  alt={cartList[0].title}
                  className="cart-img"
                />
                <div className="title-price-cart middle-title">
                  <p className="cart-title">{cartList[0].title}</p>
                  <p className="cart-num">${cartList[0].price}</p>
                </div>
                <p className="checkout-amount">{cartList[0].amount}x</p>
              </div>
            </div>
          )}
          <hr />
          <p className="num-of-items">and {numOfItems} other item(s)</p>
        </div>

        <div className="done-price">
          <h4 className="grandTotal">GRAND TOTAL</h4>
          <p className="done-price-$">$ {total}</p>
        </div>
      </div>
      <button
        type="button"
        className="done-btn"
        onClick={() => {
          setDone(false);
        }}
      >
        BACK TO HOME
      </button>
    </div>
  );
}
export default Done;
