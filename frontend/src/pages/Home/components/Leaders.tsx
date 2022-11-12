import "./Leaders.scss";

import React from "react";
import Pedestal from "../assets/11111.svg";
import L from "../assets/redbread-logo.svg";

const Leaders: React.FC = () => {
  return (
    <div className="leader__board__container">
      <div className="leader__board">
        <p className="leader__board__title">Наши короли</p>

        <div className="leader__circles">
          <div>
            <div className="leader__circle M2">
              <img src={L} alt="" />
            </div>
            <span>Его не зовут</span>
            <br />
            <span>Что-то типо денег</span>
          </div>

          <div className="top__leader">
            <div className="leader__circle M1">
              <img src={L} alt="" />
            </div>
            <span>Его не зовут</span>
            <br />
            <span>Что-то типо денег</span>
          </div>

          <div>
            <div className="leader__circle M3">
              <img src={L} alt="" />
            </div>
            <span>Его не зовут</span>
            <br />
            <span>Что-то типо денег</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
