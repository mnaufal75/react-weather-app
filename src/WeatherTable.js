import React, { Component } from 'react'
import './WeatherTable.css'
import Weather from './Weather'
import WeatherDaily from './WeatherDaily'
import WeatherGraph from './WeatherGraph'

class WeatherTable extends Component {
	constructor() {
		super()

		this.state = {
		}
	}

	render() {
		const { daily, weathersData } = this.props
		let prop

		if (!daily) {
			let div = -1
			prop = weathersData.map((weather, index) => {
				if (index % 8 === 0) {
					div++
					return (
						<div>
							<Weather index={div} weatherData={weather} />
						</div>
					)
				}
			})
		} else {
			let div = -1
			prop = weathersData.map((weather, index) => {
				if (parseInt(index / 8) === parseInt(this.props.match.params.id)) {
					div++
					return (
						<WeatherDaily index={div} weatherData={weather} />
					)
				}
			})
		}

		return(
			<div>
				<div className="container">
					{prop}
				</div>
				<WeatherGraph weathersData={weathersData} />
			</div>
		)
	}
}

export default WeatherTable
