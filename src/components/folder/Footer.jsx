import "./Footer.css";
function Footer() {
  return (
    <footer>
      <img
        src={"../assets/shared/desktop/logo.svg"}
        alt="logo icon"
        className="logo-footer"
      />
      <nav className="footer-nav">
        <p>HOME</p>
        <p>HEADPHONES</p>
        <p>SPEAKERS</p>
        <p>EARPHONES</p>
      </nav>
      <p className="footer-p">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="copyright">Copyright 2021. All Rights Reserved</p>
      <div className="social">
        <img
          src={"../assets/shared/desktop/icon-facebook.svg"}
          alt="fb icon"
          className="fb"
        />
        <img
          src={"../assets/shared/desktop/icon-twitter.svg"}
          alt="tw icon"
          className="tw"
        />
        <img
          src={"../assets/shared/desktop/icon-instagram.svg"}
          alt="ig icon"
          className="ig"
        />
      </div>
    </footer>
  );
}
export default Footer;
