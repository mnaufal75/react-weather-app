import React, { Component } from 'react'

const API = 'https://api.openweathermap.org/data/2.5/weather?q=Bandung,id&appid=d484c4caee8f496e34300af8f2142997'

class FetchData extends Component {
	constructor() {
		super()

		this.state = {
			weathers: []
		}
	}
	
	componentDidMount() {
		fetch(API)
			.then(response => {
				return response.json()
			})
			.then(data => {
				this.setState({ weathers = data.weathers })
			})
	}

	render() {
		const { weathers } = this.state

		return(
			<div></div>
		)
	}
}

export default FetchData