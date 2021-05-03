import React, { useState, useEffect } from "react";
import "./index.css";

import MainSection from "./components/MainSection/index.js";
import SecondSection from "./components/SecondSection/index.js";

const App = () => {
	const [parisData, setParisData] = useState({});

	useEffect(() => {
		makeRequest(
			"GET",
			"http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=a4d7ee06ed7e293bdc37a1d8b18e7424&units=metric",
			function (error, data) {
				if (error) {
					throw error;
				}
				setParisData(JSON.parse(data));
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
			<SecondSection
				cityName={parisData.name}
				countryName={
					parisData.sys !== undefined && parisData.sys.country !== " "
						? parisData.sys.country
						: "Loading..."
				}
				temperature={
					parisData.main !== undefined && parisData.main.temp !== " "
						? parisData.main.temp
						: "Loading..."
				}
				humidity={
					parisData.main !== undefined && parisData.main.humidity !== " "
						? parisData.main.humidity
						: "Loading..."
				}
				windSpeed={
					parisData.main !== undefined && parisData.wind.speed !== " "
						? parisData.wind.speed
						: "Loading..."
				}
			/>
		</div>
	);
};

export default App;
