import "./Streamers.scss";

import React from "react";
import StreamerCard from "./StreamerCard";

const Streamers: React.FC = () => {
  return (
    <article className="streamers__cards__container">
      <StreamerCard />
      <StreamerCard />
      <StreamerCard />
      <StreamerCard />
      <StreamerCard />
    </article>
  );
};

export default Streamers;
