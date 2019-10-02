import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'
import WeatherTable from './WeatherTable'

const API = 'https://api.openweathermap.org/data/2.5/forecast?q=Bandung,id&appid=d484c4caee8f496e34300af8f2142997&units=metric'

const App = () => {
  const [weathers, setWeathers] = useState([])
  const fetchData = async () => {
    const res = await fetch(API)
    const data = await res.json()
    await setWeathers(data.list)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="title">Weather App</h1>

        <Route
          path="/" exact
          render={(props) => <WeatherTable {...props} weathersData={weathers} daily={false} />}
        />

        <Route
          path="/:id"
          render={(props) => <WeatherTable {...props} weathersData={weathers} daily={true} />}
        />

      </div>
    </BrowserRouter>
  )
}

export default App;
