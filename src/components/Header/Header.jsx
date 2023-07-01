import "./Header.css";
import process from "process";
function Header({ cartList, setCartList, setCartActive, cartActive }) {
  return (
    <header>
      <img
        src={"../public/assets/shared/tablet/icon-hamburger.svg"}
        alt="menu icon"
        className="menu"
      />
      <img
        src={"../public/assets/shared/desktop/logo.svg"}
        alt="logo icon"
        className="logo"
      />

      <img
        src={"../public/assets/shared/desktop/icon-cart.svg"}
        alt="cart icon"
        className="cart"
        onClick={() => {
          setCartActive(!cartActive);
        }}
      />
    </header>
  );
}

export default Header;
