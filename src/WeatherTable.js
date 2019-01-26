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
		let div = 0
		const prop = this.props.weathersData.map((weather, index) => {
			if (index % 8 == 0) {
				return (
					<Weather index={div} weatherData={weather} />
				)
				div++
			}
			
		})

		return(
			<div class="container">
				{prop}
			</div>
		)
	}
}

export default WeatherTable