import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Headphones from "./components/headphones/Headphones";
import Speakers from "./components/Speakers/Speakers";
import Earphones from "./components/Earphone/Earphone";
import Singleproduct from "./components/SingleProduct/SingleProduct";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/singleproduct" element={<Singleproduct />} />
      </Routes>
    </>
  );
}

export default App;
