import "../assets/scss/Header.scss";

import SvgSprite from "../components/SVG/Sprite.jsx";
import Svg from "./SVG/index.jsx";
import jsonData from "../data.json";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const { tel } = jsonData;

  return (
    <header class="header fx-sb container">
      <SvgSprite />
      <div class="header-left-nav fx-sb">
        <button class="city-btn">Винница</button>
        <ul class="lang-menu">
          <li class="lang-submenu">
            <p>Ru</p>
            <ul class="lang-drop">
              <li>Ua</li>
              <li>Eng</li>
            </ul>
          </li>
        </ul>
        <a href="tel:{tel}">{tel}</a>
      </div>
      <div class="header-logo-container">
        <Link to="#" className="header-logo" src="#">
          <Svg name="logo" fill="none"></Svg>
        </Link>
      </div>

      <div className="header-right-nav fx-sb">
        <nav className=" header-right-nav-list fx-sb">
          <ul className="header-menu fx-sb">
            <li className="header-menu-item fx-sb">
              <Link to="#" className="header-menu-item-link">
                <span className="header-menu-par">Меню</span>
                <Svg name="menu-icon" className="header-menu-icon"></Svg>
              </Link>
            </li>
            <li className="header-menu-item fx-sb">
              <Link to="#" className="header-menu-item-link">
                <span className="header-menu-par">Акции</span>
                <Svg name="icon-sale" className="header-menu-icon"></Svg>
              </Link>
            </li>
            <li className="header-menu-item fx-sb">
              <Link to="#" className="header-menu-item-link">
                <span className="header-menu-par">Доставка</span>
                <Svg name="delivery-icon" className="header-menu-icon"></Svg>
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="#" className="header-bucket">
          <Svg name="bucket-icon"></Svg>
        </Link>
      </div>
    </header>
  );
}
