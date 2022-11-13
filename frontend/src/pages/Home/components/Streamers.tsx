import "./Streamers.scss";

import React from "react";
import StreamerCard from "./StreamerCard";

const Streamers: React.FC = () => {
  return (
    <article className="streamers__cards__container">
      <StreamerCard nickname="Kuplinov" category1="Стрелялки" donate="50k."/>
      <StreamerCard nickname="Kuplinov" donate="50k."/>
      <StreamerCard nickname="Kuplinov" category1="Что-то"/>
      <StreamerCard nickname="Kuplinov" category1="Пяу" donate="10k."/>
      <StreamerCard nickname="Kuplinov" category1="Пиу" donate="10k."/>
    </article>
  );
};

export default Streamers;
