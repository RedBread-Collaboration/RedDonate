import "./StreamerLeaders.scss";

import StreamerCard from "./StreamerCard";

import Crown1 from "../assets/Crown1.svg";
import Crown2 from "../assets/Crown2.svg";
import Crown3 from "../assets/Crown3.svg";

import React from "react";

const StreamerLeaders: React.FC = () => {
    return (
        <article className="streamer__leaders__container">

            <StreamerCard crown={Crown1}/>
            <StreamerCard crown={Crown2}/>
            <StreamerCard crown={Crown3}/>

        </article>
    );
};

export default StreamerLeaders