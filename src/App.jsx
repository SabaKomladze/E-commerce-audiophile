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
function App() {
  const [childInfo, setChildInfo] = useState("");
  const [cartList, setCartList] = useState([]);
  const [cartActive, setCartActive] = useState(false);
  const [count, setCount] = useState(1);
  const handleChildInfo = (info) => {
    setChildInfo(info);
  };
  return (
    <>
      {cartActive ? (
        <Cart
          cartList={cartList}
          setCartList={setCartList}
          count={count}
          setCount={setCount}
        />
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
          <Route
            path="/headphones/:id"
            element={<Singleproduct count={count} setCount={setCount} />}
          />
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
