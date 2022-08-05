import React from "react";
import ShowDate from "./ShowDate";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<div className="row">
				<div className="col-2">
					<img src={props.data.iconUrl} alt={props.data.description} />
				</div>
				<div className="col-2 current-temperature">
					<span className="temperature">
						{Math.round(props.data.temperature)}
					</span>
					<span className="units">°C|°F</span>
				</div>
				<div className="col-3 current-conditions">
					<ul>
						<li>Вологість: {props.data.humidity}%</li>
						<li>Вітер: {Math.round(props.data.wind)} km/h</li>
						<li>Feels like: {Math.round(props.data.feells)}°C</li>
					</ul>
				</div>
				<div className="col-5 location">
					<ul>
						<li>
							<h1>
								{props.data.city}, {props.data.country}
							</h1>
						</li>

						<li>
							{" "}
							<ShowDate date={props.data.date} />{" "}
						</li>
						<li className="text-capitalize">{props.data.description}</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
