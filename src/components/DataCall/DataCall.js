import React, { useState, useEffect } from "react";
import axios from "axios";
import SpaceCard from "../SpaceCard/SpaceCard";
import "./DataCall.css";

const DataCall = () => {
  const [spaceImage, setSpaceImage] = useState([]);
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2012);

  const nextDay = () => {
    setDay(day < 30 ? day + 1 : day === 1);
  };
  const nextMonth = () => {
    setMonth(month < 12 ? month + 1 : month === 1);
    // setMonth(month === "January" ? month === 1 : null);
    // setMonth(month === "February" ? month === 2 : null);
    // setMonth(month === "March" ? month === 3 : null);
    // setMonth(month === "April" ? month === 4 : null);
    // setMonth(month === "May" ? month === 5 : null);
    // setMonth(month === "June" ? month === 6 : null);
    // setMonth(month === "July" ? month === 7 : null);
    // setMonth(month === "August" ? month === 8 : null);
    // setMonth(month === "September" ? month === 9 : null);
    // setMonth(month === "October" ? month === 10 : null);
    // setMonth(month === "November" ? month === 11 : null);
    // setMonth(month === "December" ? month === 12 : null);
  };
  const nextYear = () => {
    setYear(year < 2019 ? year + 1 : year === 2012);
    // setYear(year === 2012);
    // setYear(year === 2013);
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
  }, [year, month, day]);

  return (
    <SpaceCard
      key={spaceImage.date}
      copyright={spaceImage.copyright}
      date={spaceImage.date}
      desc={spaceImage.explanation}
      title={spaceImage.title}
      photo={spaceImage.url}
      incrementDay={nextDay}
      incrementMonth={nextMonth}
      incrementYear={nextYear}
      // twenty12={2012}
      // twenty13={2013}
      // january={"January"}
      // february={"February"}
      // march="March"
      // april="April"
      // may="May"
      // june="June"
      // july="July"
      // august="August"
      // september="September"
      // october="October"
      // november="November"
      // december="December"
    />
  );
};

export default DataCall;
