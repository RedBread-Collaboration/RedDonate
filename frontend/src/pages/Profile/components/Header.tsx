import "./Header.scss";
import React from "react";
import header_img from "../assets/header_picture.png";


const Header: React.FC = () => {
    return (
        <img className="img" src = {header_img}></img>
    );
};

export default Header