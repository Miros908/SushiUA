import SvgSprite from "../components/SVG/Sprite.jsx";
import "../assets/scss/Footer.scss";
import { Link } from "react-router-dom";
import "../assets/scss/Footer.scss";
import Svg from "./SVG/index.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <SvgSprite />
      <Svg name="logo" className="footer__logo" fill="none"></Svg>
    </footer>
  );
}
