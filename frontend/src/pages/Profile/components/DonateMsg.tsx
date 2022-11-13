import "./DonateMsg.scss";
import React from "react";

interface IDonateMsg {
    nickname: string;
    message: string;
    donate: string;
}

const DonateMsg: React.FC<IDonateMsg> = ({nickname, message, donate}) => {
  return (
      <div className="donate__history__message">
        <div className="donate__history__message__text">
          <span className="donate__history__message__nickname">{nickname}</span>
          <span className="donate__history__message__msg">{message}</span>
        </div>
        <span className="donate__history__message__donate">{donate}</span>
      </div>
  );
};

export default DonateMsg;
