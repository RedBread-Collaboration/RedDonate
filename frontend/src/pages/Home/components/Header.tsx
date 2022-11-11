import "./Header.scss";

// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import CloudOffOutlinedIcon from "@mui/icons-material/CloudOffOutlined";
import React from "react";
import Logo from "../assets/5.svg"

const Header: React.FC = () => {
  // var cloud_icon = <CloudOutlinedIcon className="icon" />;

  return (
    <div className="header__container">
      <div className="header">

        <img src={Logo} className="Logo_img" alt="" />
        <div className="search">
        <form>
          <input type="text" placeholder="Искать здесь..."/>
          <button type="submit">ТЫк</button>
        </form>
        </div>
        <p className="LK">Что-то про личный кабинет</p>
    
      </div>
    </div>
  );
};

export default Header;
