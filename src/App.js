import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'
import WeatherTable from './WeatherTable'

const API = 'https://api.openweathermap.org/data/2.5/forecast?q=Jakarta,id&appid=d484c4caee8f496e34300af8f2142997&units=metric'

class App extends Component {
  constructor(props) {
		super(props)

		this.state = {
			weathers: []
		}
	}

	componentDidMount() {
		fetch(API)
			.then(response => response.json())
			.then(data => {
        this.setState({ weathers: data.list })
			})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h2>Cuaca Bandung</h2>

          <Route
            path="/" exact
            component={(props) => <WeatherTable {...props} weathersData={this.state.weathers} daily={false} />}
          />

          <Route
            path="/:id"
            component={(props) => <WeatherTable {...props} weathersData={this.state.weathers} daily={true} />}
          />

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
