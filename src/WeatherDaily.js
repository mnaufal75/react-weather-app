import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './WeatherDaily.css'

class WeatherDaily extends Component {
	constructor() {
		super()

		this.state = {
		}

		this.kelvinToCelsius = this.kelvinToCelsius.bind(this)
	}
	
	kelvinToCelsius = (kelvin) => {
		return parseFloat(kelvin) - 273
	}

	render() {
		const { weatherData, index } = this.props

		const tempMin = weatherData.main.temp_min
		const tempMinCelsius = this.kelvinToCelsius(tempMin).toFixed(2)

		const tempMax = weatherData.main.temp_max
		const tempMaxCelsius = this.kelvinToCelsius(tempMax).toFixed(2)

		const fullDate = new Date(weatherData.dt_txt + " UTC")
		const weather = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png'

		// const day = dayTable[fullDate.getDay()]
		const options1 = { weekday: 'short', day: 'numeric', month: 'numeric', timeZone: 'Asia/Jakarta' }
		const options2 = { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta', hour12: false }
		const date = fullDate.toLocaleDateString("en-US", options1)
		const clock = fullDate.toLocaleDateString("en-US", options2)

		return(
			<div className={"div_"+index}>
				{/* <h4 class="day">{day}</h4> */}
				<h4 className="date">{date}</h4>
				<h4 className="clock">{clock}</h4>

				<Link to={"/"+index}><img class="weatherImage" src={weather} width="50" /></Link>

				<h4>{tempMinCelsius}° {tempMaxCelsius}°</h4>
			</div>
		)
	}
}

export default WeatherDaily