import React, { useState, useEffect } from "react";
import "./index.css";

import MainSection from "./components/MainSection/index.js";
import SecondSection from "./components/SecondSection/index.js";

const App = () => {
	const [weatherData, setWeatherData] = useState({});

	useEffect(() => {
		makeRequest(
			"GET",
			"http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=a4d7ee06ed7e293bdc37a1d8b18e7424",
			function (error, data) {
				if (error) {
					throw error;
				}
				setWeatherData(JSON.parse(data));
				// console.log(weatherData);
			}
		);
	});

	function makeRequest(method, url, callback) {
		let xmlhttp = new XMLHttpRequest();

		xmlhttp.open(method, url);

		xmlhttp.onload = function () {
			callback(null, xmlhttp.response);
		};
		xmlhttp.onerror = function () {
			callback(xmlhttp.response);
		};
		xmlhttp.send();
	}

	return (
		<div>
			<MainSection />
			<SecondSection />
			{/* {weatherData.name} */}
		</div>
	);
};

export default App;
