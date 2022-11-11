import "./Card.scss";

import React from "react";
import streamlog from "../assets/redbread-logo.svg"

const Card: React.FC = () => {
    return (
        <div className = "card__container">
            <div className = "avatar__container">
                <img className="avatar" src={streamlog} alt=""></img>
            </div>
            <span className = "streamer__name">RedBread Collaboration</span>
            <span className = "streamer__subscribers">9 subscribers</span>
        </div>
    );
};

export default Card