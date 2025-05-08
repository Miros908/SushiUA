import SvgSprite from "../components/SVG/Sprite.jsx";
import "../assets/scss/Footer.scss";
import { Link } from "react-router-dom";
import "../assets/scss/Footer.scss";
import Svg from "./SVG/index.jsx";

export default function Footer() {
  return (
    <footer className="footer container">
      <SvgSprite />
      <div className="social-logo-footer-container fx-col-sb">
        <Svg name="logo" className="footer__logo" fill="none"></Svg>

        <div className="footer-social-list fx-sb">
          <Link src="#">
            <img
              className="footer-social-img"
              src="../assets/img/twitter.svg"
            />
          </Link>
          <Link src="#">
            <img
              className="footer-social-img"
              src="../assets/img/telegram.svg"
            />
          </Link>
          <Link src="#">
            <img
              className="footer-social-img"
              src="../assets/img/instagram.svg"
            />
          </Link>
          <Link src="#">
            <img
              className="footer-social-img"
              src="../assets/img/linkedin.svg"
            />
          </Link>
          <Link src="#">
            <img
              className="footer-social-img"
              src="../assets/img/facebook.svg"
            />
          </Link>
        </div>
        <p className="footer-protect-text">© Все права защищены</p>
      </div>
      <img className="footer-decor" src="../assets/img/footerdecor.svg"></img>
    </footer>
  );
}
