import React from "react";
import "./Insights.scss";
import { MdLightbulbOutline } from "react-icons/md";

function Insights() {
  return (
    <div className="insights">
      <div className="insights__container">
        <div className="insights__header row">
          <MdLightbulbOutline className="bulb" />
          <h1 className="insights__title"> Insights</h1>
        </div>
      </div>
    </div>
  );
}

export default Insights;
