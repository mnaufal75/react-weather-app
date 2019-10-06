import React from "react";
import "./WeatherDaily.css";

const WeatherDaily = ({ weatherData, index }) => {
  const tempMin = Math.round(weatherData.main.temp_min);
  const tempMax = Math.round(weatherData.main.temp_max);

  const fullDate = new Date(weatherData.dt * 1000);
  const weather =
    "http://openweathermap.org/img/wn/" +
    weatherData.weather[0].icon +
    "@2x.png";

  const options = {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
    hour12: false
  };
  const clock = fullDate.toLocaleDateString("en-US", options);

  return (
    <div className={"weather-daily"}>
      <h4 className="clock">{clock}</h4>

      <img class="weatherImage" alt={index} src={weather} width="100" />

      <h4 className="temp">
        {tempMin}° {tempMax}°
      </h4>
    </div>
  );
};

export default WeatherDaily;
