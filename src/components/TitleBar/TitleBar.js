import React from "react";

const TitleBar = (props) => {
  console.log(props);
  return (
    <div className="logo-bar">
      {" "}
      Place Holder
      <img className="logo-image" src={props.img} alt="Nasa Logo" />
    </div>
  );
};

export default TitleBar;
