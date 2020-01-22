import React from "react";
import "./SpaceCard.css";

const SpaceCard = (props) => {
  return (
    <div className="daily-pic">
      <div className="card-container">
        <h2>Title: {props.title}</h2>
        <h3>Today's Date: {props.date}</h3>
        <div className="image-container">
          <img src={props.photo} alt="APOD" />
        </div>
        <div className="description-container">
          <p>{props.desc}</p>
        </div>
        <div className="credits">
          <p>{props.copyright}</p>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
