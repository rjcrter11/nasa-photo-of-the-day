import React, { useState, useEffect } from "react";
import axios from "axios";
import SpaceCard from "../SpaceCard/SpaceCard";

const DataCall = () => {
  const [spaceImage, setSpaceImage] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        // console.log(response.data);
        setSpaceImage(response.data);
      })
      .catch((err) => {
        console.log("Data not fetched", err);
      });
  }, []);

  return (
    <div className="pic">
      {spaceImage.map((image) => {
        return (
          <SpaceCard
            copyright={spaceImage.copyright}
            date={spaceImage.date}
            desc={spaceImage.explanation}
            title={spaceImage.title}
            photo={spaceImage.url}
          />
        );
      })}
    </div>
  );
};

export default DataCall;