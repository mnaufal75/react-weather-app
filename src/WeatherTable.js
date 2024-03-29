import React from "react";
import "./WeatherTable.css";
import Weather from "./Weather";
import WeatherDaily from "./WeatherDaily";
import WeatherGraph from "./WeatherGraph";

const WeatherTable = ({ match, daily, weathersData }) => {
  const { id } = match.params;
  let weathers;

  if (!daily) {
    weathers = weathersData.filter((weather, index) => {
      return index % 8 === 0;
    });
  } else {
    weathers = weathersData.filter((weather, index) => {
      return parseInt(index / 8) === parseInt(id);
    });
  }

  return (
    <div>
      <div className="container">
        {weathers.map((weather, index) => {
          return daily ? (
            <WeatherDaily index={index} weatherData={weather} />
          ) : (
            <Weather index={index} weatherData={weather} />
          );
        })}
      </div>
      <div className="graph-container">
        {daily && <WeatherGraph weathersData={weathers} />}
      </div>
    </div>
  );
};

export default WeatherTable;
