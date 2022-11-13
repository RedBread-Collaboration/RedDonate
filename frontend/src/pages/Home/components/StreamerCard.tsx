// import "./Card.scss";
import "./StreamerCard.scss"

import React from "react";
// import streamlog from "../assets/cat.jpg"
// import streamlog from "../assets/logostream.png"
// import info from "../assets/info.svg";
import Background from "../assets/Back.jpg";
import Crown1 from "../assets/Crown1.svg";
import Crown2 from "../assets/Crown2.svg";
import Crown3 from "../assets/Crown3.svg";

const StreamerCard: React.FC = () => {
    return (
        <article className="streamer__card__container">

            <div className="streamer__card">

                <div className="streamer__card__crown">
                    <img src={Crown1} alt="" />
                </div>

                <div className="streamer__card__background">
                    <img src={Background} alt="" />
                </div>

                <div className="streamer__card__categories">
                    <span className="streamer__card__categories_span">Что-то там</span>
                    <span className="streamer__card__categories_span">И игры</span>
                </div>

                <div className="streamer__card__nickname">
                Kuplinov ► Play
                </div>

            </div>

            <div className="streamer__card">

                <div className="streamer__card__crown">
                    <img src={Crown2} alt="" />
                </div>

                <div className="streamer__card__background">
                    <img src={Background} alt="" />
                </div>

                <div className="streamer__card__categories">
                    <span className="streamer__card__categories_span">Что-то там</span>
                    <span className="streamer__card__categories_span">И игры</span>
                </div>

                <div className="streamer__card__nickname">
                Kuplinov ► Play
                </div>

            </div>

            <div className="streamer__card">

                <div className="streamer__card__crown">
                    <img src={Crown3} alt="" />
                </div>

                <div className="streamer__card__background">
                    <img src={Background} alt="" />
                </div>

                <div className="streamer__card__categories">
                    <span className="streamer__card__categories_span">Что-то там</span>
                    <span className="streamer__card__categories_span">И игры</span>
                </div>

                <div className="streamer__card__nickname">
                <span>Kuplinov ► Play</span>
                </div>

            </div>

        </article>
    );
};

export default StreamerCard