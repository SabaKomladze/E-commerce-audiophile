import "./category.css";
function Category() {
  return (
    <div className="cat">
      <div className="head-cat cat-style">
        <img
          src="./assets/image-removebg-preview(41).svg"
          alt="headphone icon category"
          className="head-category img-size"
        />
        <h5 className="cat-title">HEADPHONES</h5>
        <div className="shop-div">
          <p className="shop">shop</p>{" "}
          <span className="shop-arrow">
            <img
              src="./assets/shared/desktop/icon-arrow-right.svg"
              alt="arrow"
              className="arrow"
            />{" "}
          </span>
        </div>
      </div>
      <div className="speak-cat cat-style">
        <img
          src="./assets/home/mobile/image-speaker-zx9.png"
          alt="speaker icon category"
          className="speaker-category img-size"
        />
        <h5 className="cat-title">SPEAKERS</h5>
        <div className="shop-div">
          <p className="shop">shop</p>{" "}
          <span className="shop-arrow">
            <img
              src="./assets/shared/desktop/icon-arrow-right.svg"
              alt="arrow"
              className="arrow"
            />{" "}
          </span>
        </div>
      </div>
      <div className="ear-cat cat-style">
        <img
          src="./assets/ear.png"
          alt="earphone icon category"
          className="ear-category img-size"
        />
        <h5 className="cat-title">EARPHONES</h5>
        <div className="shop-div">
          <p className="shop">shop</p>{" "}
          <span className="shop-arrow">
            <img
              src="./assets/shared/desktop/icon-arrow-right.svg"
              alt="arrow"
              className="arrow"
            />{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Category;
