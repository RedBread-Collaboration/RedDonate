import "./StreamerProfile.scss";
import React from "react";
import StreamerCard from "../../Home/components/StreamerCard";
import mark_icon from "../assets/bookmark.svg";
import donate_icon from "../assets/icon_donate.svg";
import twitch from "../assets/twitch.svg";
import discord from "../assets/discord.svg";
import telegram from "../assets/telegram.svg";
import youtube from "../assets/youtube.svg";

interface IStreamerProfile {
    id: number | undefined;
    nickname: string | undefined;
    category1?: string | undefined;
    category2?: string | undefined;
    donate?: string | undefined;
    paymentUrl?: string | undefined;
}

const StreamerProfile: React.FC<IStreamerProfile> = ({ id, nickname, category1, category2, donate, paymentUrl }) => {
    return (
        <article className="column streamer__profile__container">
            <StreamerCard id={id} nickname={nickname} category1={category1} category2={category2} donate={donate} />
            <div className="column buttons_actions">
                <div className="button mark">
                    <img src={mark_icon}></img>
                    <span>В избранное</span>
                </div>
                <div className="button donate">
                    <img src={donate_icon}></img>
                    <a href={paymentUrl}>
                        <span>Задонатить</span>
                    </a>
                </div>
            </div>
            <div className="Social__Networks">
                <img src={twitch}></img>
                <img src={discord}></img>
                <img src={telegram}></img>
                <img src={youtube}></img>
            </div>
        </article>
    );
};

export default StreamerProfile