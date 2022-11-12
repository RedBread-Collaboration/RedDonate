import "./Card.scss";

import React from "react";
import streamlog from "../assets/cat.jpg"
// import streamlog from "../assets/logostream.png"
import info from "../assets/info.svg";
import donate from "../assets/donate.svg";

const Card: React.FC = () => {
    return (
        <div className= "flex__column card__container">
            <div className = "avatar__container">
                <img className="flex__column avatar" src={streamlog} alt=""></img>
            </div>
            <div className = "flex__column streamer__info">
                <div className = "flex__column name__donate">
                    <span className = "streamer__name">Kitty</span>
                    <span className="sum__donates">500К ₽</span>
                </div>
                <div className = "flex__column button__container">
                    <div className = "flex__row button button__info">
                        <img className="icon__info" src={info}></img>
                        <a href="donate">Подробнее</a>
                    </div>
                    <div className = "flex__row button button__donate">
                        <img className="icon__donate" src={donate}></img>
                        <span>Задонатить</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card