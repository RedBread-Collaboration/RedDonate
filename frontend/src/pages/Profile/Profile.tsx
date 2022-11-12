import "./Profile.scss";
import Header from "./components/Header";
import LogoStreamer from "./assets/cat.jpg";
import Piont from "./assets/icon.svg";
import Arrow from "./assets/arr.svg";


function Profile() {
  return (
    <article>
      <Header />
      <div className="profile__top">
        <img className="profile__avatar" alt="" src={LogoStreamer}></img>
        <div className="profile__info">
            <span className="profile__nickname">Ламповая Няша</span>
            <span className="paragraph__about">Показываю фокусы и люблю фикусы. В свободное время зажаю картошку. Сплю преимущественно на правом боку.</span>
        </div>
      </div>

      <div className="profile__main__block">

        <div className="profile__block">
            <span className="profile__block__title">Топ 3-и дебила</span>
            <div className="profile__block__element">
                <img src={Piont} alt="" />
                <span>Дебик 1 - 1000 руб.</span>
            </div>
            <div className="profile__block__element">
                <img src={Piont} alt="" />
                <span>Дебик 2 - 500 руб.</span>
            </div>
            <div className="profile__block__element">
                <img src={Piont} alt="" />
                <span>Дебик 3 - 100 руб.</span>
            </div>
        </div>

        <div className="profile__block">
            <span className="profile__block__title">История</span>
            <div className="profile__block__element">
                <img src={Piont} alt="" />
                <span>Дебик 1 - 1000 руб.</span>
            </div>
            <div className="profile__block__element">
                <img src={Piont} alt="" />
                <span>Дебик 2 - 500 руб.</span>
            </div>
            <div className="profile__block__element">
                <img src={Piont} alt="" />
                <span>Дебик 3 - 100 руб.</span>
            </div>
            <div className="profile__block__element">
                <img src={Piont} alt="" />
                <span>Дебик 4 - 100 руб.</span>
            </div>
            <div className="profile__block__element">
                <img src={Piont} alt="" />
                <span>Дебик 5 - 100 руб.</span>
            </div>
            <div className="profile__block__element">
                <img src={Arrow} alt="" />
                <span>Посмотреть ещё</span>
            </div>
        </div>

        <div className="profile__block">
            <div className="profile__block__element">
                <span>За последние 24 часа</span>
            </div>
            <div className="profile__block__element">
                <span className="profile__money">84795</span>
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
