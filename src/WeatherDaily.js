import React, { Component } from 'react'
import './WeatherDaily.css'

class WeatherDaily extends Component {
	constructor() {
		super()

		this.state = {
		}
	}

	render() {
		const { weatherData, index } = this.props

		const tempMin = weatherData.main.temp_min
		const tempMax = weatherData.main.temp_max

		const fullDate = new Date(weatherData.dt_txt)
		const weather = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png'

		const options1 = { weekday: 'short', day: 'numeric', month: 'numeric', timeZone: 'Asia/Jakarta' }
		const options2 = { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta', hour12: false }
		const date = fullDate.toLocaleDateString("en-US", options1)
		const clock = fullDate.toLocaleDateString("en-US", options2)

		return(
			<div className={"div_"+index}>
				<h5 className="date">{date}</h5>
				<h5 className="clock">{clock}</h5>

					<img class="weatherImage" src={weather} width="50" />

				<h5 className="temp">{tempMin}° {tempMax}°</h5>
			</div>
		)
	}
}

export default WeatherDaily
