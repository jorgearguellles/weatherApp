import React, { useState, useEffect } from "react";
import MainSection from "./components/MainSection/index.js";
import SecondSection from "./components/SecondSection/index.js";
import { makeRequest } from "./services/index";
import styles from "./App.css";
import "./index.css";

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
