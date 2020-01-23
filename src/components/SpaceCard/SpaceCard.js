import React, { useState } from "react";
import "./SpaceCard.css";
import logo2 from "../../assets/nasa2.png";

import SpaceCardBottom from "../SpaceCardBottom/SpaceCardBottom";

const SpaceCard = (props) => {
  const [showContent, setShowContent] = useState(false);
  const toggleContent = () => setShowContent(!showContent);

  return (
    <div className="daily-pic">
      <div className="card-container">
        <div className="button-container">
          <button className="date-picker" onClick={props.incrementYear}>
            Year
          </button>
          <button className="date-picker" onClick={props.incrementMonth}>
            Month
          </button>
          <button className="date-picker" onClick={props.incrementDay}>
            Day
          </button>
        </div>

        <div className="image-container">
          <img src={props.photo} alt="APOD" />
        </div>

        <div className="top-wrapper">
          <div className="icon-wrapper">
            <img src={logo2} alt="icon" />
          </div>
          <div className="header-container">
            <div className="header">
              <h2>{props.title}</h2>
              <span> {props.date}</span>
            </div>
          </div>
          <div className="toggle-container">
            <i className="fas fa-ellipsis-v" onClick={toggleContent} />
          </div>
        </div>

        {showContent && (
          <SpaceCardBottom
            copyright={props.copyright}
            desc={props.desc}
            onClick={toggleContent}
          />
        )}
      </div>
    </div>
  );
};

export default SpaceCard;
