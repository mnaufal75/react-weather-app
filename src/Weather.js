import React, { Component } from 'react'
import './Weather.css'

const dayTable = {
	0: 'sunday',
	1: 'monday',
	2: 'tuesday',
	3: 'wednesday',
	4: 'thursday',
	5: 'friday',
	6: 'saturday',
}

const weatherTable = {
	'Rain': 'https://img.icons8.com/android/96/000000/rain.png',
	'Cloudy': 'https://img.icons8.com/android/96/000000/clouds.png',
	'overcast Clouds': 'https://img.icons8.com/android/96/000000/clouds.png',
	'Clear': 'https://img.icons8.com/android/96/000000/sun.png'
}

class Weather extends Component {
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
			<div class={"div_"+index}>
				{/* <h4 class="day">{day}</h4> */}
				<h4 class="date">{date}</h4>
				<h4 class="clock">{clock}</h4>

				<img class="weatherImage" src={weather} width="50" />

				<h4>{tempMinCelsius}° {tempMaxCelsius}°</h4>
			</div>
		)
	}
}

export default Weather