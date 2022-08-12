import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	function handleResponse(response) {
		console.log(response.data);
	}
	console.log(props);
	let apiKey = "15b17c39bc6708ab7518942a1ffb9aca";
	//const apiKey = "8d782eb84d0a7f35fdc1e2938bf75ddc";
	let longitude = props.coordinates.lon;
	let latitude = props.coordinates.lat;
	let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

	axios.get(apiUrl).then(handleResponse);

	return (
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div className="WeatherForecast-day">Thu</div>
					<div>
						<img
							src="https://openweathermap.org/img/wn/02d@2x.png"
							alt="icon"
							className="WeatherForecast-img"
						/>
					</div>
					<div className="WeatherForecast-temperature">
						<span className="WeatherForecast-temperature-max">20°</span>
						<span className="WeatherForecast-temperature-min">10°</span>
					</div>
				</div>
			</div>
		</div>
	);
}
