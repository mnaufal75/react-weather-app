import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import WeatherTable from "./WeatherTable";

const App = () => {
  const [weathers, setWeathers] = useState([]);
  const [city, setCity] = useState("Bandung");
  const [country, setCountry] = useState("id");

  const cityRef = useRef("");
  const countryRef = useRef("");

  const API = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=d484c4caee8f496e34300af8f2142997&units=metric`;

  const fetchData = async () => {
    const res = await fetch(API);
    const data = await res.json();
    await setWeathers(data.list);
  };

  useEffect(() => {
    cityRef.current.focus();
  });

  useEffect(() => {
    fetchData();
  }, [city, country]);

  const handleSubmit = event => {
    event.preventDefault();

    setCity(cityRef.current.value);
    setCountry(countryRef.current.value);
    cityRef.current.value = "";
    countryRef.current.value = "";
    cityRef.current.focus();
  };

  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="title">Weather App</h1>

        <form className="form" onSubmit={handleSubmit}>
          <label className="cityLabel">
            City:
            <input ref={cityRef} type="text" name="city" />
          </label>
          <label className="countryLabel">
            Country:
            <input ref={countryRef} type="text" name="country" />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <Route
          path="/"
          exact
          render={props => (
            <WeatherTable {...props} weathersData={weathers} daily={false} />
          )}
        />

        <Route
          path="/:id"
          render={props => (
            <WeatherTable {...props} weathersData={weathers} daily={true} />
          )}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
