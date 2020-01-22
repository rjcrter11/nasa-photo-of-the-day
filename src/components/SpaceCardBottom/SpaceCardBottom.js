import React, { useState } from "react";
import "../SpaceCard/SpaceCard.css";

const SpaceCardBottom = (props) => {
  return (
    <div className="bottom-wrapper">
      <div className="description-container">
        <p>
          Explanation:{props.desc}
          {/*  Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut lectus arcu bibendum at. Tortor vitae purus faucibus
          ornare suspendisse sed nisi. Dolor sit amet consectetur adipiscing.
          Pretium nibh ipsum consequat nisl vel pretium lectus quam. Enim neque
          volutpat ac tincidunt vitae semper quis lectus nulla. Justo nec
          ultrices dui sapien eget mi proin sed. Venenatis tellus in metus
          vulputate eu scelerisque felis. Quisque id diam vel quam elementum
          pulvinar etiam non. Placerat vestibulum lectus mauris ultrices. Morbi
          tristique senectus et netus et malesuada. Eget dolor morbi non arcu
          risus quis varius quam quisque. Lacus vestibulum sed arcu non. Ut
          porttitor leo a diam sollicitudin tempor id eu. Sit amet */}
        </p>
      </div>
      <div className="credits">
        <p>Copyright info: {props.copyright} </p>
      </div>
    </div>
  );
};

export default SpaceCardBottom;
