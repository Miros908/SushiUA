import "../assets/scss/Header.scss";
import SvgSprite from "../components/SVG/Sprite.jsx";
import Svg from "./SVG/index.jsx";
import jsonData from "../data.json";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const { tel } = jsonData;
  const [isMenuClose, setIsMenuСlose] = useState(true);
  return (
    <header className="header">
      <SvgSprite />
      <div className={isMenuClose ? "hidden" : "header__drop-down-list"}>
        <Link to="/sales" className="header__drop-down-link">
          <p className="header__drop-down-text">Акции</p>
          <Svg
            name="icon-sale"
            className="header__drop-down-icon header__icon"
          ></Svg>
        </Link>
        <Link to="/delivery" className="header__drop-down-link" href="#">
          <p className="header__drop-down-text">Доставка</p>

          <Svg
            name="delivery-icon"
            className="header__drop-down-icon header__icon"
          ></Svg>
        </Link>
        <a href="tel:{tel}" className="header__drop-down-link">
          <p className="header__drop-down-text">{tel}</p>

          <Svg
            name="icon-phone"
            className="header__drop-down-icon header__icon"
          ></Svg>
        </a>
      </div>

      <a href="tel:{tel}" className="header__phone">
        {tel}
      </a>

      <a className="header__logo" src="#">
        <Svg name="logo" className="header__logo-icon" fill="none"></Svg>
      </a>
      <div className="header__menu--section">
        <a className="header__menu--section-link" href="#">
          <p className="header__menu--section-text">Меню</p>

          <Svg
            name="menu-icon"
            className="header__menu--section-icon header__icon"
          ></Svg>
          <Svg name="footer-picture"></Svg>
        </a>
        <a className="header__menu--section-link" href="#">
          <p className="header__menu--section-text">Акции</p>

          <Svg
            name="icon-sale"
            className="header__menu--section-sale-icon header__icon"
          ></Svg>
        </a>
        <a className="header__menu--section-link" href="#">
          <p className="header__menu--section-text">Доставка</p>

          <Svg
            name="delivery-icon"
            className="header__menu--section-delivery-icon header__icon"
          ></Svg>
        </a>
      </div>

      <div className="header__buttons">
        <button className={isMenuClose ? "header__bucket" : "hidden"}>
          <Svg name="bucket-icon" className="header__bucket-icon"></Svg>
          <span className="header__bucket--counter">0</span>
        </button>

        <button
          className="header__menu--burger"
          onClick={() => {
            setIsMenuСlose(!isMenuClose);
          }}
        >
          <Svg
            className={
              isMenuClose
                ? "header__menu--burger-icon"
                : "header__menu--burger-close"
            }
            name={isMenuClose ? "burger-icon" : "close-burger-icon"}
          ></Svg>
        </button>
      </div>
    </header>
  );
}
