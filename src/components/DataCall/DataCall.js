import React, { useState, useEffect } from "react";
import axios from "axios";
import SpaceCard from "../SpaceCard/SpaceCard";
import "./DataCall.css";

const DataCall = (props) => {
  const [spaceImage, setSpaceImage] = useState([]);
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2012);

  const nextDay = () => {
    setDay(day < 30 ? day + 1 : day === 1);
  };
  const nextMonth = () => {
    setMonth(month < 12 ? month + 1 : month === 1);
  };
  const nextYear = () => {
    setYear(year < 2019 ? year + 1 : year === 2012);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=eo3g6XQbCaKgmn3tvVn3VJ02Nu8ikJ4erSOHVSbn&date=${year}-${month}-${day}`
      )
      .then((response) => {
        // console.log(response);
        setSpaceImage(response.data);
      })
      .catch((err) => {
        console.log("Data not fetched", err);
      });
  }, [day, month, year]);

  return (
    <div className="pic">
      <SpaceCard
        key={spaceImage.date}
        copyright={spaceImage.copyright}
        date={spaceImage.date}
        desc={spaceImage.explanation}
        title={spaceImage.title}
        photo={spaceImage.url}
        logoImage={props.cardimg}
        incrementDay={nextDay}
        incrementMonth={nextMonth}
        incrementYear={nextYear}
      />
    </div>
  );
};

export default DataCall;
