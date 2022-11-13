import "./Profile.scss";
import Header from "./components/Header";
import Arrow from "./assets/arr.svg";
import { useNavigate } from "react-router-dom";
import StreamerProfile from "./components/StreamerProfile";
import Statistic from "./components/Statistic";
import HistoryDonates from "./components/HistoryDonates";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const IStreamer = {
  id: undefined,
  nickname: undefined,
  category1: undefined,
  category2: undefined,
  donate: undefined,
  paymentUrl: undefined,
}

function Profile() {
  let [STREAMER, setStreamer] = useState(IStreamer);

  let navigate = useNavigate();
  let { id } = useParams();

  console.log(id);

  async function fetchStreamer() {
    return fetch("http://localhost:8081/users/getUserById?userId=" + id)
      .then(response => {
        if (response.ok) return response.json();
      });
  }

  useEffect(() => {
    fetchStreamer().then(streamer => {
      setStreamer(streamer);
      // Streamers = streamers;
    });
  }, [STREAMER]);

  return (
    <article className="Profile__page">
      <Header />
      <div className="return__arrow">
        <img
          src={Arrow}
          alt=""
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
      <div className="profile__container">
          <StreamerProfile
            id={STREAMER.id}
            nickname={STREAMER.nickname}
            category1={STREAMER.category1}
            category2={STREAMER.category2}
            donate=""
            paymentUrl={STREAMER.paymentUrl} />
          <div className="extra__block"></div>
          <Statistic />
          <HistoryDonates />
      </div>
      
      {/* <div className="profile__top">
        <img className="profile__avatar" alt="" src={LogoStreamer}></img>
        <div className="profile__info">
          <span className="profile__nickname">Ламповая Няша</span>
          <span className="paragraph__about">
            Показываю фокусы и люблю фикусы. В свободное время сажаю картошку.
            Сплю преимущественно на правом боку.
          </span>
          <span className="stream__category__profile">
            Видеоигры
          </span>
        </div>
      </div>

      <div className="profile__container">
        <div className="profile__block">  
            <span className="profile__block__title">Топ 3 донатеров</span>
            <div className="top__donaters_container">
                <span className="donater__position">Аноним - 5099  руб.</span>
                <span className="donater__position">ADVOKAT - 4345 руб.</span>
                <span className="donater__position">КорольJLb - 3815 руб.</span>
            </div>
        </div>

        <div className="profile__block">
          <span className="profile__block__title">История</span>
          <div className="all_donates_container">
            <div className="donate__info__block">
                <span className="donate__main__info">통역사 - 566 RUB</span>
                <span className="donate__message">
                    est aliqua. cupidatat in ipsum quis consequat.
                    commodo amet, dolore Lorem in sunt ut ea nulla
                    Ut ex sit aute incididunt
                </span>
                <span className="data__time">14:15 12.11.2022</span>
            </div>
            <div className="donate__info__block">
                <span className="donate__main__info">통역사 - 566 RUB</span>
                <span className="donate__message">
                    est aliqua. cupidatat in ipsum quis consequat.
                    commodo amet, dolore Lorem in sunt ut ea nulla
                    Ut ex sit aute incididunt
                </span>
                <span className="data__time">14:15 12.11.2022</span>
            </div>
            <div className="donate__info__block">
                <span className="donate__main__info">통역사 - 566 RUB</span>
                <span className="donate__message">
                    est aliqua. cupidatat in ipsum quis consequat.
                    commodo amet, dolore Lorem in sunt ut ea nulla
                    Ut ex sit aute incididunt
                </span>
                <span className="data__time">14:15 12.11.2022</span>
            </div>
            <div className="donate__info__block">
                <span className="donate__main__info">통역사 - 566 RUB</span>
                <span className="donate__message">
                    est aliqua. cupidatat in ipsum quis consequat.
                    commodo amet, dolore Lorem in sunt ut ea nulla
                    Ut ex sit aute incididunt
                </span>
                <span className="data__time">14:15 12.11.2022</span>
            </div>
            <div className="donate__info__block">
                <span className="donate__main__info">통역사 - 566 RUB</span>
                <span className="donate__message">
                    est aliqua. cupidatat in ipsum quis consequat.
                    commodo amet, dolore Lorem in sunt ut ea nulla
                    Ut ex sit aute incididunt
                </span>
                <span className="data__time">14:15 12.11.2022</span>
            </div>
          </div>
          <div className="profile__block__element">
            <img src={Arrow} alt="" />
            <span>Посмотреть ещё</span>
          </div>
        </div>

        <div className="profile__block">
          <div className="profile__block__element">
            <span>Количество донатов за день</span>
          </div>
          <div className="profile__block__element">
            <span className="profile__money">16</span>
          </div>
          <div className="profile__block__element">
            <span>За всё время собрали</span>
          </div>
          <div className="profile__block__element">
            <span className="profile__money">3945807₽</span>
          </div>
        </div>
      </div> */}
    </article>
  );
}

export default Profile;
