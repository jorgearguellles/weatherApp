import React, { useState, useEffect } from "react";
import MainSection from "./components/MainSection/index.js";
import SecondSection from "./components/SecondSection/index.js";
import { makeRequest } from "./services/index";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./App.css";
import "./index.css";

function iconImg(icon) {
	return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

const App = () => {
	const [parisData, setParisData] = useState({});
	const [bogotaData, setBogotaData] = useState({});

	useEffect(() => {
		makeRequest(
			"http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=857745c96799b4b642a4438dcc45062e&units=metric",
			function (error, data) {
				if (error) {
					throw error;
				}
				console.log("Paris:", data);
				setParisData(data);
			}
		);
		makeRequest(
			"https://api.openweathermap.org/data/2.5/onecall?lat=4.6097&lon=-74.0817&exclude=minutely,alerts,hourly&appid=857745c96799b4b642a4438dcc45062e&units=metric",
			function (error, data) {
				if (error) {
					throw error;
				}
				console.log("Bogotá:", data);
				setBogotaData(data);
			}
		);
	}, []);

	return (
		<div className={styles.container}>
			<MainSection
				img={
					bogotaData.current !== undefined &&
					bogotaData.current.weather[0]["icon"] !== " " ? (
						iconImg(bogotaData.current.weather[0]["icon"])
					) : (
						<Loader
							type="BallTriangle"
							color="#00BFFF"
							height={20}
							width={20}
							timeout={3000} //3 secs
						/>
					)
				}
				weather={
					bogotaData.current !== undefined &&
					bogotaData.current["temp"] !== " " ? (
						bogotaData.current.weather[0]["main"]
					) : (
						<Loader
							type="BallTriangle"
							color="#00BFFF"
							height={20}
							width={20}
							timeout={3000} //3 secs
						/>
					)
				}
				temperature={
					bogotaData.current !== undefined &&
					bogotaData.current["temp"] !== " " ? (
						bogotaData.current["temp"]
					) : (
						<Loader
							type="BallTriangle"
							color="#00BFFF"
							height={20}
							width={20}
							timeout={3000} //3 secs
						/>
					)
				}
			/>
			<SecondSection
				cityName={parisData.name}
				countryName={
					parisData.sys !== undefined && parisData.sys.country !== " " ? (
						parisData.sys.country
					) : (
						<Loader
							type="BallTriangle"
							color="#00BFFF"
							height={20}
							width={20}
							timeout={3000} //3 secs
						/>
					)
				}
				imgWeather={
					parisData.main !== undefined &&
					parisData.weather[0]["icon"] !== " " ? (
						iconImg(parisData.weather[0]["icon"])
					) : (
						<Loader
							type="BallTriangle"
							color="#00BFFF"
							height={20}
							width={20}
							timeout={3000} //3 secs
						/>
					)
				}
				temperature={
					parisData.main !== undefined && parisData.main.temp !== " " ? (
						parisData.main.temp
					) : (
						<Loader
							type="BallTriangle"
							color="#00BFFF"
							height={20}
							width={20}
							timeout={3000} //3 secs
						/>
					)
				}
				humidity={
					parisData.main !== undefined && parisData.main.humidity !== " " ? (
						parisData.main.humidity
					) : (
						<Loader
							type="BallTriangle"
							color="#00BFFF"
							height={20}
							width={20}
							timeout={3000} //3 secs
						/>
					)
				}
				windSpeed={
					parisData.main !== undefined && parisData.wind.speed !== " " ? (
						parisData.wind.speed
					) : (
						<Loader
							type="BallTriangle"
							color="#00BFFF"
							height={20}
							width={20}
							timeout={3000} //3 secs
						/>
					)
				}
			/>
		</div>
	);
};

export default App;
