import data from "../../../data.json";
import { useEffect, useState } from "react";
import Category from "../category/Category";
import Bringing from "../bring/Bringing";
import Footer from "../folder/Footer";
function Speakers() {
  const [filterHead, setFilterHead] = useState([]);
  useEffect(() => {
    const filterHeader = data.filter((prod) => prod.category === "speakers");
    setFilterHead(filterHeader);
  }, []);
  console.log(filterHead);
  return (
    <div>
      <div className="headName">SPEAKERS</div>
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
            <button type="button" className="first-btn prod-list">
              See Product
            </button>
          </div>
        ))}
      </div>
      <Category />
      <Bringing />
      <Footer />
    </div>
  );
}
export default Speakers;
