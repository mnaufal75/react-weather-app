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
		const { weatherData } = this.props
		console.log(weatherData)

		const temp = weatherData.main.temp
		const tempCelcius = this.kelvinToCelcius(temp)

		const fullDate = new Date(weatherData.dt_txt)
		const weather = weatherData.weather[0].main

		const date = fullDate.getDate()
		const month = fullDate.getMonth() + 1

		return(
			<tr>
				<td>{date}/{month}</td>
				<td>{tempCelcius} C</td>
				<td>{weather}</td>
			</tr>
		)
	}
}

export default Weather