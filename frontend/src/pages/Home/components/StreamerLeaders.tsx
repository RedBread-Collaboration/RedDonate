import "./StreamerLeaders.scss";

import StreamerCard from "./StreamerCard";

import Crown1 from "../assets/Crown1.svg";
import Crown2 from "../assets/Crown2.svg";
import Crown3 from "../assets/Crown3.svg";

import React from "react";

const StreamerLeaders: React.FC = () => {
    return (
        <article className="streamer__leaders__container">

            <StreamerCard crown={Crown1} nickname="Kuplinov ► Play" category1="Хорроры" category2="Отдых"  donate="200k."/>
            <StreamerCard crown={Crown2} nickname="Kuplinov ► Play" category1="Хорроры" donate="100k."/>
            <StreamerCard crown={Crown3} nickname="Kuplinov ► Play" category1="Отдых" donate="50k."/>

        </article>
    );
};

export default StreamerLeaders