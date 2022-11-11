import "./Header.scss";

import React from "react";
import Pedestal from "../assets/123.svg"

const Leaders: React.FC = () => {
  return (
    <div className="leader__board__container">
      <div className="leader__board">
        <img src={Pedestal} alt="" />
      </div>
    </div>
  );
};

export default Leaders;
