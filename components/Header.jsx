import "../assets/scss/Header.scss";
import SvgSprite from "../components/SVG/Sprite.jsx";
import React, { useState } from "react";

export default function Header() {
  const [isMenuClose, setIsMenuOpen] = useState(true);
  return (
    <div className="header">
      <SvgSprite />
      <div className={isMenuClose ? "hidden" : "header__drop-down-list"}>
        <a className="header__drop-down-link" href="#">
          <p className="header__drop-down-text">Акции</p>
          <svg className="header__drop-down-icon" width="15" height="15">
            <use xlinkHref="#icon-sale"></use>
          </svg>
        </a>
        <a className="header__drop-down-link" href="#">
          <p className="header__drop-down-text">Доставка</p>
          <svg className="header__drop-down-icon" width="15" height="15">
            <use xlinkHref="#delivery-icon"></use>
          </svg>
        </a>
        <a href="tel:+380985483883" className="header__drop-down-link">
          <p className="header__drop-down-text">+380 (98) 548 38 83</p>
          <svg className="header__drop-down-icon" width="15" height="15">
            <use xlinkHref="#icon-phone"></use>
          </svg>
        </a>
      </div>

      <a href="tel:+380985483883" className="header__phone">
        <p> +380 (98) 548 38 83</p>
      </a>

      <a className="header__logo" src="#">
        <svg className="header__logo-icon" width="137" height="42" fill="none">
          <use xlinkHref="#logo"></use>
        </svg>
      </a>
      <div className="header__menu--section">
        <a className="header__menu--section-link" href="#">
          <p className="header__menu--section-text">Меню</p>
          <svg className="header__menu--section-icon" width="15" height="15">
            <use xlinkHref="#menu-icon"></use>
          </svg>
        </a>
        <a className="header__menu--section-link" href="#">
          <p className="header__menu--section-text">Акции</p>
          <svg
            className="header__menu--section-sale-icon"
            width="15"
            height="15"
          >
            <use xlinkHref="#icon-sale"></use>
          </svg>
        </a>
        <a className="header__menu--section-link" href="#">
          <p className="header__menu--section-text">Доставка</p>
          <svg
            className="header__menu--section-delivery-icon"
            width="15"
            height="15"
          >
            <use xlinkHref="#delivery-icon"></use>
          </svg>
        </a>
      </div>

      <div className="header__buttons">
        <button className={isMenuClose ? "header__bucket" : "hidden"}>
          <svg className="header__bucket-icon" width="40" height="40">
            <use xlinkHref="#bucket-icon"></use>
          </svg>
          <span className="header__bucket--counter">0</span>
        </button>

        <button
          className="header__menu--burger"
          onClick={() => setIsMenuOpen(!isMenuClose)}
        >
          <svg
            className={
              isMenuClose
                ? "header__menu--burger-icon"
                : "header__menu--burger-close"
            }
            width={isMenuClose ? "40" : "30"}
            height={isMenuClose ? "40" : "30"}
          >
            <use
              xlinkHref={isMenuClose ? "#burger-icon" : "#close-burger-icon"}
            ></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
