import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Headphones from "./components/headphones/Headphones";
import Speakers from "./components/Speakers/Speakers";
import Earphones from "./components/Earphone/Earphone";
import Singleproduct from "./components/SingleProduct/SingleProduct";
import MyContext from "./context";
import ScrollToTop from "../utils/scrollTop";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { useEffect } from "react";
function App() {
  const [childInfo, setChildInfo] = useState("");
  const [cartList, setCartList] = useState([]);
  const [cartActive, setCartActive] = useState(false);
  const [total, setTotal] = useState(0);
  const handleChildInfo = (info) => {
    setChildInfo(info);
  };
  useEffect(() => {
    if (cartActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [cartActive]);
  return (
    <div className="main">
      {cartActive ? (
        <>
          <div className="theme">
            <Cart
              cartList={cartList}
              setCartList={setCartList}
              setCartActive={setCartActive}
              total={total}
              setTotal={setTotal}
            />
          </div>
        </>
      ) : null}
      <Header setCartActive={setCartActive} cartActive={cartActive} />
      <ScrollToTop />
      <MyContext.Provider
        value={{ childInfo, handleChildInfo, cartList, setCartList }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/headphones"
            element={<Headphones childInfo={childInfo} />}
          />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/headphones/:id" element={<Singleproduct />} />
          <Route path="/speakers/:id" element={<Singleproduct />} />
          <Route path="/earphones/:id" element={<Singleproduct />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                cartList={cartList}
                setCartList={setCartList}
                total={total}
                setTotal={setTotal}
              />
            }
          />
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
