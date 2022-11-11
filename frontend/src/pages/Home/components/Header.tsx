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

        <div className="header__lk">
          <span>Что-то про личный кабинет</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
