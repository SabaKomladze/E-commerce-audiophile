import "./Headphone.css";
import data from "../../../data.json";
import { useEffect, useState } from "react";
import Category from "../category/Category";
import Bringing from "../bring/Bringing";
import Footer from "../folder/Footer";
import { Link } from "react-router-dom";
function Headphones() {
  const [filterHead, setFilterHead] = useState([]);

  useEffect(() => {
    const filterHeader = data.filter((prod) => prod.category === "headphones");
    setFilterHead(filterHeader);
  }, []);

  return (
    <div>
      <div className="headName">HEADPHONES</div>
      <div>
        {filterHead.map((prod, index) => (
          <div key={index} className="single-Headphone-List">
            <img
              src={prod.image.mobile}
              alt="product image"
              className="prod-image"
            />
            {prod.new ? <p className="prod-new">NEW PRODUCT</p> : null}
            <h1 className="prod-head-list-title">{prod.name}</h1>
            <p className="prod-head-list-p">{prod.description}</p>
            <Link
              to="/singleproduct"
              state={prod}
              className="first-btn prod-list"
            >
              See Product
            </Link>
          </div>
        ))}
      </div>
      <Category />
      <Bringing />
      <Footer />
    </div>
  );
}
export default Headphones;
