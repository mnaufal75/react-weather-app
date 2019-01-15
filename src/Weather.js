import React, { Component } from 'react'
import './Weather.css'

class Weather extends Component {
	constructor() {
		super()

		this.state = {
		}

		this.kelvinToCelcius = this.kelvinToCelcius.bind(this)
	}
	
	kelvinToCelcius = (kelvin) => {
		return parseFloat(kelvin) - 273
	}

	render() {
		const prop = this.props.weatherData.map((weather, index) => {
			const fullDate = new Date(weather.dt_txt)
			const date = fullDate.getDate()
			const month = fullDate.getMonth()
			return (
				<tr key={index}>
					<td>{date}/{month+1}</td>
					<td>{this.kelvinToCelcius(weather.main.temp)} C</td>
					<td>{weather.weather[0].main}</td>
				</tr>
			)
		})

		return(
			<table>
				<tr>
					<th>Time</th>
					<th>Temperature</th>
					<th>Weather</th>
				</tr>
				{prop}
			</table>
		)
	}
}

export default Weather