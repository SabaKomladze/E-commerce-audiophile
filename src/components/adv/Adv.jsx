import "./adv.css";
function Adv() {
  return (
    <div className="adv">
      {/*orange*/}
      <div className="orange-div">
        <img
          src="./assets/home/mobile/image-speaker-zx9.png"
          alt="speaker"
          className="speaker-adv"
        />
        <div className="orange-text">
          <h3 className="orange-title">
            ZX9 <br />
            SPEAKER
          </h3>
          <p className="orange-p">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button type="button" className="orange-btn">
            See Product
          </button>
        </div>
      </div>
      {/*speaker ad*/}
      <div className="speaker-ad">
        <h2 className="speaker-ad-title">ZX7 SPEAKER</h2>
        <button type="button" className="speaker-ad-btn">
          See Product
        </button>
      </div>
      {/*ear ad*/}
      <div className="ear-ad">
        <div className="ear-div-ad"></div>
        <div className="ear-div-text">
          <h1 className="ear-ad-title">YX1 EARPHONES</h1>
          <button type="button" className="speaker-ad-btn">
            See Product
          </button>
        </div>
      </div>
    </div>
  );
}
export default Adv;
