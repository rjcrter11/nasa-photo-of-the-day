import React, { useState } from "react";
import "./SpaceCard.css";

import SpaceCardBottom from "../SpaceCardBottom/SpaceCardBottom";

const SpaceCard = (props) => {
  const [showContent, setShowContent] = useState(true);
  const toggleContent = () => setShowContent(!showContent);

  return (
    <div className="daily-pic">
      <div className="card-container">
        <div className="top-wrapper">
          <div className="icon-wrapper">
            <img src={props.logoImage} alt="icon" />
          </div>

          <div className="header-container">
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
          </div>
        </div>
        <div className="image-container">
          <img src={props.photo} alt="APOD" />
        </div>
        <div className="toggle-container">
          <button onClick={toggleContent}>button</button>
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
