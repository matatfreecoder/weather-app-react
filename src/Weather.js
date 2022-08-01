import React from "react";
import "./Weather.css";

export default function Weather() {
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
					<img
						src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
						alt="Weather icon"
					/>
				</div>
				<div className="col-2 current-temperature">
					<span className="temperature">21</span>
					<span className="units">°C|°F</span>
				</div>
				<div className="col-3 current-conditions">
					<ul>
						<li>Опади: 17%</li>
						<li>Вологість: 92%</li>
						<li>Вітер: 11 км/год</li>
						<li>Feel like 21°C</li>
					</ul>
				</div>
				<div className="col-5 location">
					<ul>
						<li>
							<h1>Нью-Йорк, США</h1>
						</li>

						<li>понеділок 06:00</li>
						<li>Хмарно</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
