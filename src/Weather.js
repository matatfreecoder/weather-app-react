import React, { useState } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setweatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function displayWeather(response) {
		console.log(response.data);
		setweatherData({
			ready: true,
			temperature: response.data.main.temp,
			city: response.data.name,
			country: response.data.sys.country,
			wind: response.data.wind.speed,
			humidity: response.data.main.humidity,
			feells: response.data.main.feels_like,
			description: response.data.weather[0].description,
			iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			date: new Date(response.data.dt * 1000),
		});
	}
	function search() {
		const apiKey = "15b17c39bc6708ab7518942a1ffb9aca";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(displayWeather);
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(city);
		search();
	}

	function changeCity(event) {
		setCity(event.target.value);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather border rounded">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-8">
							<input
								type="search"
								placeholder="Enter a city"
								className="form-control"
								autoFocus="on"
								onChange={changeCity}
							/>
						</div>
						<div className="col-3">
							<input
								type="submit"
								value="Search"
								className="btn btn-primary w-100"
							/>
						</div>
					</div>
				</form>
				<WeatherInfo data={weatherData} />
			</div>
		);
	} else {
		search();

		return (
			<RotatingLines
				strokeColor="grey"
				strokeWidth="5"
				animationDuration="0.75"
				width="96"
				visible={true}
			/>
		);
	}
}
