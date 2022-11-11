import "./Header.scss";

import React from "react";
import Logo from "../assets/Logo.svg";

const Header: React.FC = () => {
  return (
    <div className="header__container">
      <div className="header">
        <div className="header__logo">
          <img src={Logo} alt="" />
        </div>

        <div className="header__search__bar">
          <input type="text" placeholder="Искать здесь..." />
        </div>

        <div className="header__lk">
          <span>Что-то про личный кабинет</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
