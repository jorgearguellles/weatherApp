import React, { useState, useEffect } from "react";
import "./index.css";

import MainSection from "./components/MainSection/index.js";
import SecondSection from "./components/SecondSection/index.js";

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const App = () => {
	const [parisData, setParisData] = useState({});

	useEffect(() => {
		makeRequest(
			"http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=a4d7ee06ed7e293bdc37a1d8b18e7424&units=metric",
			function (error, data) {
				if (error) {
					throw error;
				}
				setParisData(data);
			}
		);
	});

	function makeRequest(url_api, callback) {
		let xhttp = new XMLHttpRequest();

		xhttp.open("GET", url_api, true);

		xhttp.onreadystatechange = function (event) {
			if (xhttp.readyState === 4) {
				if (xhttp.status === 200) {
					callback(null, JSON.parse(xhttp.responseText));
				} else {
					const error = new Error("Error:" + url_api);
					return callback(error, null);
				}
			}
		};
		xhttp.send();
	}

	return (
		<div>
			<MainSection />
			<SecondSection
				cityName={parisData.name}
				countryName={
					parisData.sys !== undefined && parisData.sys.country !== " "
						? parisData.sys.country
						: console.log("Loading...")
				}
				temperature={
					parisData.main !== undefined && parisData.main.temp !== " "
						? parisData.main.temp
						: console.log("Loading...")
				}
				humidity={
					parisData.main !== undefined && parisData.main.humidity !== " "
						? parisData.main.humidity
						: console.log("Loading...")
				}
				windSpeed={
					parisData.main !== undefined && parisData.wind.speed !== " "
						? parisData.wind.speed
						: console.log("Loading...")
				}
			/>
		</div>
	);
};

export default App;
