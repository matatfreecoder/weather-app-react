import axios from "axios";
import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import ShowDate from "./ShowDate";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setweatherData] = useState({ ready: false });

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

	if (weatherData.ready) {
		return (
			<div className="Weather border rounded">
				<form>
					<div className="row">
						<div className="col-8">
							<input
								type="search"
								placeholder="Enter a city"
								className="form-control"
								autoFocus="on"
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

				<div className="row">
					<div className="col-2">
						<img src={weatherData.iconUrl} alt={weatherData.description} />
					</div>
					<div className="col-2 current-temperature">
						<span className="temperature">
							{Math.round(weatherData.temperature)}
						</span>
						<span className="units">°C|°F</span>
					</div>
					<div className="col-3 current-conditions">
						<ul>
							<li>Вологість: {weatherData.humidity}%</li>
							<li>Вітер: {Math.round(weatherData.wind)} km/h</li>
							<li>Feels like: {Math.round(weatherData.feells)}°C</li>
						</ul>
					</div>
					<div className="col-5 location">
						<ul>
							<li>
								<h1>
									{weatherData.city}, {weatherData.country}
								</h1>
							</li>

							<li>
								{" "}
								<ShowDate date={weatherData.date} />{" "}
							</li>
							<li className="text-capitalize">{weatherData.description}</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "15b17c39bc6708ab7518942a1ffb9aca";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(displayWeather);

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
