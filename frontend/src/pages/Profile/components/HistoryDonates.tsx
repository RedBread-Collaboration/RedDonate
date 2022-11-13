import "./HistoryDonates.scss";
import React from "react";
import DonateMsg from "./DonateMsg";

const HistoryDonates: React.FC = () => {
  return (
    <article className="donate__history__container">
        
      <div className="donate__history">
        <div className="donate__history__title">Последние сообщения</div>

        <DonateMsg nickname="Cool girl" message="Девушку себе найди уже" donate="100₽"/>
        <DonateMsg nickname="Strange man" message="ШИкарно" donate="500₽"/>
        <DonateMsg nickname="LOL" message="LOL LOL LOL" donate="10000₽"/>
      </div>
    </article>
  );
};

export default HistoryDonates;
