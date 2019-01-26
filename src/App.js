import React, { Component } from 'react'
import './App.css'
import WeatherTable from './WeatherTable'

const API = 'https://api.openweathermap.org/data/2.5/forecast?q=Jakarta,id&appid=d484c4caee8f496e34300af8f2142997'

const weathers = [
  {
    day: 'sunday',
    temperature: 22
  },
  {
    day: 'monday',
    temperature: 19
  },
  {
    day: 'tuesday',
    temperature: 23
  },
  {
    day: 'wednesday',
    temperature: 22
  },
  {
    day: 'thursday',
    temperature: 24
  },
  {
    day: 'friday',
    temperature: 21
  },
  {
    day: 'saturday',
    temperature: 20
  },
]

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
      <div className="App">
        <WeatherTable weathersData={this.state.weathers} />
      </div>
    )
  }
}

export default App;
