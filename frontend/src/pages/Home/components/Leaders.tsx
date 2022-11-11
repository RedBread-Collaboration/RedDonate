import "./Leaders.scss";

import React from "react";
import Pedestal from "../assets/11111.svg"
import L from "../assets/redbread-logo.svg"

const Leaders: React.FC = () => {
  return (
    <div className="leader__board__container">
      <div className="leader__board">
        <p className="leader__board__title">Наши короли</p>
        <div className="A">
            <div className="B M2"><img src={L} alt="" /></div>
            <div className="B M1"><img src={L} alt="" /></div>
            <div className="B M3"><img src={L} alt="" /></div>
            
            
            {/* <p>2</p>
            <p>1</p>
            <p>3</p> */}
        </div>
      </div>
    </div>
  );
};

export default Leaders;
