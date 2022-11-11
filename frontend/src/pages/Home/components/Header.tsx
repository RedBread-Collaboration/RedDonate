import "./Header.scss";

import React from "react";
import Logo from "../assets/Logo.svg"

const Header: React.FC = () => {
  // var cloud_icon = <CloudOutlinedIcon className="icon" />;

  return (
    <div className="header__container">
      <div className="header">

        <img className="header__logo" src={Logo} alt="" />

        <input className="header__search__bar" type="text" placeholder="Искать здесь..."/>

        <p className="header__lk">Что-то про личный кабинет</p>
    
      </div>
    </div>
  );
};

export default Header;
