import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Weather.css'

class Weather extends Component {
	constructor() {
		super()

		this.state = {
		}
	}

	render() {
		const { weatherData, index } = this.props

		const tempMin = Math.round(weatherData.main.temp_min)
		const tempMax = Math.round(weatherData.main.temp_max)

		const fullDate = new Date(weatherData.dt_txt)
		const weather = 'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png'

		const options = { weekday: 'short' }
		const date = fullDate.toLocaleDateString("en-US", options)

		return(
			<div className={"div_"+index}>
				<h4 className="date">{date}</h4>

				<Link to={"/"+index}>
					<img className="weatherImage" src={weather} width="100" />
				</Link>

				<h4 className="temp">{tempMin}° {tempMax}°</h4>
			</div>
		)
	}
}

export default Weather
