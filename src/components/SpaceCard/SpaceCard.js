import React from "react";

const SpaceCard = (props) => {
  return (
    <div className="daily-pic">
      <h2>Title: {props.title}</h2>
      <img src={props.photo} alt="APOD" />
      <p>{props.desc}</p>
      <div className="credits">
        <p>{props.date}</p>
        <p>{props.copyright}</p>
      </div>
    </div>
  );
};

export default SpaceCard;
