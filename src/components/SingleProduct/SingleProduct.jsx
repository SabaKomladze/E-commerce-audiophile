import { useLocation, useParams } from "react-router-dom";
import "./Singleproduct.css";
import { Link } from "react-router-dom";
import Bringing from "../bring/Bringing";
import Footer from "../folder/Footer";
import MyContext from "../../context";
import datas from "../../../data.json";
import { useState, useContext, useEffect } from "react";
function Singleproduct() {
  const { handleChildInfo } = useContext(MyContext);
  const params = useParams();
  const [count, setCount] = useState(1);
  // const [data, setData] = useState(null);

  const data = datas.find((item) => item.slug === params.id);

  console.log(data);
  return (
    <div>
      <p className="back">Go Back</p>
      <img
        src={`.${data.image.mobile}`}
        alt="product image"
        className="prod-image"
      />
      {data.new ? <p className="prod-new">NEW PRODUCT</p> : null}
      <h1 className="prod-head-single-title">{data.name}</h1>
      <p className="prod-head-single-p">{data.description}</p>
      <p className="price">${data.price}</p>
      <div className="number">
        <div className="num">
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
        <button type="button" className="single-btn">
          ADD TO CART
        </button>
      </div>
      <h2 className="feat">FEATURES</h2>
      <p className="describ">{data.features}</p>
      <div className="box-div">
        <h2 className="box">IN THE BOX</h2>
        <div className="box-list">
          {data.includes.map((items, index) => (
            <p className="x" key={index}>
              {items.quantity}x<span className="list-span">{items.item}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="gallery">
        <img
          src={`.${data.gallery.first.mobile}`}
          className="gallery-first gal"
          alt="gallery"
        />
        <img
          src={`.${data.gallery.second.mobile}`}
          className="gallery-sec gal"
          alt="gallery"
        />
        <img
          src={`.${data.gallery.third.mobile}`}
          className="gallery-thrd gal"
          alt="gallery"
        />
      </div>

      <div className="suggest">
        <h2 className="like">YOU MAY ALSO LIKE</h2>
        {data.others.map((item, index) => {
          return (
            <div className="suggestion" key={index}>
              <img
                src={`.${item.image.mobile}`}
                alt={item.name}
                className="sug-img"
              />
              <h1 className="sug-title">{item.name}</h1>
              <Link className="first-btn" to={`/headphones/${item.slug}`}>
                See Product
              </Link>
            </div>
          );
        })}
      </div>
      <Bringing />
      <Footer />
    </div>
  );
}
export default Singleproduct;
