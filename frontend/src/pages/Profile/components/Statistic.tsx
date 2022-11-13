import "./Statistic.scss";
import React from "react";

const Statistic: React.FC = () => {
    return (
        <article className="column statistic__container">
            <div className="column top__donators">
                <span className="title">
                    ТОП 3 ДОНАТЕРОВ
                    <hr className="underline"></hr>
                </span>
                <div className="column donators__nicknames">
                    <div><span>IT_KittyK - 8k</span></div>
                    <div><span>Рябов Игнат - 7k</span></div>
                    <div><span>Syrnnik - 6k</span></div>
                </div>
            </div>
            <div className="column stat donate__quantity">
                <span className="number">1.6k</span>
                <span className="text">донатов</span>
            </div>
            <div className="column stat general__sum">
                <span className="number">200k</span>
                <span className="text">общая сумма</span>
            </div>
        </article>
    );
};

export default Statistic