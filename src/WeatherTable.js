import React, { Component } from 'react'
import './WeatherTable.css'
import Weather from './Weather'

class WeatherTable extends Component {
	constructor() {
		super()

		this.state = {
		}
	}

	render() {
		const prop = this.props.weathersData.map((weather, index) => {
			return (
				<Weather weatherData={weather} />
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

export default WeatherTable