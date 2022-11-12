import "./Donate.scss";
import Header from "./components/Header";
import LogoStreamer from "./assets/cat.jpg";
import ExtraInfo from "./components/ExtraInfo";


function Donate() {
    return (
        <article>
            <Header />
            <div className="flex__donate__row main__container">
                <div className="flex__donate__column main__info__container">
                   <span className="donate__user">Донат пользователю</span>
                   <div className = "flex__donate__row main__info">
                        <img className = "avatar_donate" src={LogoStreamer}></img>
                        <span className = "Nickname">Ламповая Няша</span>
                    </div> 
                </div>
                <div className="extra__info__container">
                    <ExtraInfo />
                </div>
            </div>            
        </article>
    );
}

export default Donate;