import "./Header.css";
function Header() {
  return (
    <header>
      <img
        src="./assets/shared/tablet/icon-hamburger.svg"
        alt="menu icon"
        className="menu"
      />
      <img
        src="./assets/shared/desktop/logo.svg"
        alt="logo icon"
        className="logo"
      />

      <img
        src="./assets/shared/desktop/icon-cart.svg"
        alt="cart icon"
        className="cart"
      />
    </header>
  );
}
export default Header;
