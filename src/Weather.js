import React from "react";
import "./Weather.css";

export default function Weather() {
	return (
		<div className="Weather">
			<form>
				<div className="row">
					<div className="col-8">
						<input
							type="search"
							placeholder="Enter a city"
							className="form-control"
						/>
					</div>
					<div className="col-3">
						<input type="submit" value="Search" className="btn btn-primary" />
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
				<div className="col-2">21°C|°F</div>
				<div className="col-3">
					<ul>
						<li>Опади: 17%</li>
						<li>Вологість: 92%</li>
						<li>Вітер: 11 км/год</li>
						<li>Відчувається як </li>
					</ul>
				</div>
				<div className="col-5">
					<ul>
						<li>
							<h1>Нью-Йорк</h1>
						</li>
						<li>Сполучені Штати Америки</li>
						<li>понеділок 06:00</li>
						<li>Хмарно</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
