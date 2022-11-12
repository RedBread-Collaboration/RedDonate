import "./Profile.scss";
import Header from "./components/Header";
import LogoStreamer from "./assets/cat.jpg";
import Piont from "./assets/icon.svg";
import Arrow from "./assets/arr.svg";
import { useNavigate } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();

  return (
    <article>
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
      <div className="profile__top">
        <img className="profile__avatar" alt="" src={LogoStreamer}></img>
        <div className="profile__info">
          <span className="profile__nickname">Ламповая Няша</span>
          <span className="paragraph__about">
            Показываю фокусы и люблю фикусы. В свободное время зажаю картошку.
            Сплю преимущественно на правом боку.
          </span>
        </div>
      </div>

      <div className="profile__main__block">
        <div className="profile__block">
          <span className="profile__block__title">Топ 3-и донатеров</span>
          <div className="profile__block__element">
            <img src={Piont} alt="" />
            <span>Человек 1 - 1000 руб.</span>
          </div>
          <div className="profile__block__element">
            <img src={Piont} alt="" />
            <span>Человек 2 - 500 руб.</span>
          </div>
          <div className="profile__block__element">
            <img src={Piont} alt="" />
            <span>Человек 3 - 100 руб.</span>
          </div>
        </div>

        <div className="profile__block">
          <span className="profile__block__title">История</span>
          <div className="profile__block__element">
            <img src={Piont} alt="" />
            <span>Человек 1 - 1000 руб.</span>
          </div>
          <div className="profile__block__element">
            <img src={Piont} alt="" />
            <span>Человек 2 - 500 руб.</span>
          </div>
          <div className="profile__block__element">
            <img src={Piont} alt="" />
            <span>Человек 3 - 100 руб.</span>
          </div>
          <div className="profile__block__element">
            <img src={Piont} alt="" />
            <span>Человек 4 - 100 руб.</span>
          </div>
          <div className="profile__block__element">
            <img src={Piont} alt="" />
            <span>Человек 5 - 100 руб.</span>
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
      </div>
    </article>
  );
}

export default Profile;
