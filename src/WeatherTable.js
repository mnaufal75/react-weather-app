import React, { Component } from 'react'
import './WeatherTable.css'
import Weather from './Weather'
import WeatherDaily from './WeatherDaily'

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
						<Weather index={div} weatherData={weather} />
					)
				}
			})
		} else {
			let div = -1
			prop = weathersData.map((weather, index) => {
				console.log(index / 8)
				if (parseInt(index / 8) === parseInt(this.props.match.params.id)) {
					div++
					return (
						<WeatherDaily index={div} weatherData={weather} />
					)
				}
			})
		}

		return(
			<div className="container">
				{prop}
			</div>
		)
	}
}

export default WeatherTable