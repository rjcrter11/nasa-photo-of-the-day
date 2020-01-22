import React from "react";
import "./TitleBar.css";

const TitleBar = (props) => {
  console.log(props);
  return (
    <div className="logo-bar">
      <div className="image-wrapper">
        <img className="logo-image" src={props.img} alt="Nasa Logo" />
      </div>
      <div className="headding-wrapper">
        <h1>A PICTURE A DAY</h1>
      </div>
    </div>
  );
};

export default TitleBar;
