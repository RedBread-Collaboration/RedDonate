import "./Streamers.scss";

import React, { useEffect, useState } from "react";
import StreamerCard from "./StreamerCard";

interface IStreamer {
  id: number,
  nickname: string,
  desc: string,
  category1: string,
  category2: string,
};

const Streamers: React.FC = () => {

  let [STREAMERS, setStreamers] = useState([]);
  // let [DONATESUM, setDonatesSum] = useState([]);

  async function fetchStreamers() {
    return fetch("http://localhost:8081/users/getAllUsers")
      .then(response => {
        if (response.ok) return response.json();
      });
  }

  // async function fetchDonatesSum(userId: Number) {
  //   return fetch("localhost:8081/donates/getAmountForAllTime?userId=" + userId)
  //     .then(response => {
  //       if (response.ok) return response.json();
  //     });
  // }

  useEffect(() => {
    fetchStreamers().then(streamers => {
      setStreamers(streamers);
      // Streamers = streamers;
    });
  }, STREAMERS);
  // console.log(streamers);

  return (
    <article className="streamers__cards__container">
      {/* <StreamerCard nickname="Kuplinov" category1="Стрелялки" donate="50k."/>
      <StreamerCard nickname="Kuplinov" donate="50k."/>
      <StreamerCard nickname="Kuplinov" category1="Что-то"/>
      <StreamerCard nickname="Kuplinov" category1="Пяу" donate="10k."/>
      <StreamerCard nickname="Kuplinov" category1="Пиу" donate="10k."/> */}
      {STREAMERS.map(
        (streamer: IStreamer) =>
          <StreamerCard
            key={streamer.id}
            id={streamer.id}
            nickname={streamer.nickname}
            category1={streamer.category1}
            category2={streamer.category2}
          />
      )}
    </article>
  );
};

export default Streamers;
