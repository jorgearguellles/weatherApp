import React, { useState, useEffect } from "react";
import "./index.css";
import styles from "./App.css";

import MainSection from "./components/MainSection/index.js";
import SecondSection from "./components/SecondSection/index.js";

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const App = () => {
	const [parisData, setParisData] = useState({});
	const [bogotaData, setBogotaData] = useState({});

	useEffect(() => {
		makeRequest(
			"GET",
			"http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=857745c96799b4b642a4438dcc45062e&units=metric",
			function (error, data) {
				if (error) {
					throw error;
				}
				setParisData(data);
			}
		);
		makeRequest(
			"GET",
			"https://api.openweathermap.org/data/2.5/onecall?lat=4.6097&lon=-74.0817&exclude=minutely,alerts,hourly&appid=857745c96799b4b642a4438dcc45062e&units=metric",
			function (error, data) {
				if (error) {
					throw error;
				}
				setBogotaData(data);
			}
		);
	}, []);

	// function makeRequest(url_api, callback) {
	// 	let xhttp = new XMLHttpRequest();

	// 	xhttp.open("GET", url_api, true);

	// 	xhttp.onreadystatechange = function (event) {
	// 		if (xhttp.readyState === 4) {
	// 			if (xhttp.status === 200) {
	// 				callback(null, JSON.parse(xhttp.responseText));
	// 			} else {
	// 				const error = new Error("Error:" + url_api);
	// 				return callback(error, null);
	// 			}
	// 		}
	// 	};
	// 	xhttp.send();
	// }

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
		<div className={styles.container}>
			<MainSection
				temperature={
					bogotaData.current !== undefined && bogotaData.current["temp"] !== " "
						? bogotaData.current["temp"]
						: "Loading..."
				}
			/>
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
