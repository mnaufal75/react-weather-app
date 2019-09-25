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
		const weather = 'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png'

		const options = { weekday: 'short', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta', hour12: false }
		const clock = fullDate.toLocaleDateString("en-US", options)

		return(
			<div className={"div_"+index}>
				<h5 className="clock">{clock}</h5>

					<img class="weatherImage" src={weather} width="100" />

				<h5 className="temp">{tempMin}° {tempMax}°</h5>
			</div>
		)
	}
}

export default WeatherDaily
