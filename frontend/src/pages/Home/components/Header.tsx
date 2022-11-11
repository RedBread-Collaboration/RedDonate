import "./Header.scss";

import React from "react";
import Logo from "../assets/Logo.svg";
import Magnifying from "../assets/Magnifying.png";

const Header: React.FC = () => {
  return (
    <div className="header__container">
      <div className="header">
        <div className="header__logo">
          <img src={Logo} alt="" />
        </div>

        <div className="header__center">
        <div className="header__search__bar">
          <img src={Magnifying} alt="" />
          <input type="text" placeholder="Найти стримера" />
        </div>
        </div>

        <a href="#" className="header__lk">
          <span>Sign in</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
        </a>
      </div>
    </div>
  );
};

export default Header;
