import "./Cart.css";
function Cart({ cartList, setCartList }) {
  return (
    <>
      <div className="cart-remove">
        <p className="cart-num">Cart</p>
        <p className="remove">Remove all</p>
      </div>
    </>
  );
}
export default Cart;
