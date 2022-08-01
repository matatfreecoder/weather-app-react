import "./App.css";
import Weather from "./Weather";

function App() {
	return (
		<div className="App">
			<div class="container">
				<Weather />
				<footer>
					<br />
					This project was coded by{" "}
					<a
						href="https://github.com/matatfreecoder/weather-app-react"
						target="_blank"
						rel="noreferrer"
					>
						Natalia Matat{" "}
					</a>
					and is open-sourse
				</footer>
			</div>
		</div>
	);
}

export default App;
