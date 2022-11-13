// import "./Card.scss";
import "./StreamerCard.scss";

import React from "react";
// import streamlog from "../assets/cat.jpg"
// import streamlog from "../assets/logostream.png"
// import info from "../assets/info.svg";
import Background from "../assets/Back.jpg";


interface IStreamerCard {
    id: number | undefined;
    crown?: string | undefined;
    nickname: string | undefined;
    category1?: string | undefined;
    category2?: string | undefined;
    donate?: string | undefined;
}


const StreamerCard: React.FC<IStreamerCard> = ({ id, crown, nickname, category1, category2, donate }) => {
  return (
    // <article className="streamer__card__container">
      <article className="streamer__card">
        {crown ? 
        <div className="streamer__card__crown">
          <img src={crown} alt="" />
        </div>: ""}

        <div className="streamer__card__background">
          <img src={Background} alt="" />
        </div>

        <div className="streamer__card__categories">
          {category1 ? <span className="streamer__card__categories_span">{category1}</span> : ""}
          {category2 ? <span className="streamer__card__categories_span">{category2}</span> : ""}
        </div>

        <a href={"profile/" + id} className="streamer__card__nickname">
          <div className="streamer__card__nickname__text">
            <span>{nickname}</span>
            <span className="streamer__card__sum">{donate}</span>
          </div>

          <svg
            className="streamer__card__nickname__arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z" />
          </svg>
        </a>
      </article>

    //   <div className="streamer__card">
    //     <div className="streamer__card__crown">
    //       <img src={Crown2} alt="" />
    //     </div>

    //     <div className="streamer__card__background">
    //       <img src={Background} alt="" />
    //     </div>

    //     <div className="streamer__card__categories">
    //       <span className="streamer__card__categories_span">Что-то там</span>
    //       <span className="streamer__card__categories_span">И игры</span>
    //     </div>

    //     <div className="streamer__card__nickname">
    //       <div className="streamer__card__nickname__text">
    //         <span>Kuplinov ► Play</span>
    //         <span>100k.</span>
    //       </div>

    //       <svg
    //         className="streamer__card__nickname__arrow"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 24 24"
    //       >
    //         <path d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z" />
    //       </svg>
    //     </div>
    //   </div>

    //   <div className="streamer__card">
    //     <div className="streamer__card__crown">
    //       <img src={Crown3} alt="" />
    //     </div>

    //     <div className="streamer__card__background">
    //       <img src={Background} alt="" />
    //     </div>

    //     <div className="streamer__card__categories">
    //       <span className="streamer__card__categories_span">Что-то там</span>
    //       <span className="streamer__card__categories_span">И игры</span>
    //     </div>

    //     <div className="streamer__card__nickname">
    //       <div className="streamer__card__nickname__text">
    //         <span>Kuplinov ► Play</span>
    //         <span>80k.</span>
    //       </div>

    //       <svg
    //         className="streamer__card__nickname__arrow"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 24 24"
    //       >
    //         <path d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z" />
    //       </svg>
    //     </div>
    //   </div>
    // </article>
  );
};

export default StreamerCard;
