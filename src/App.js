import React, { useState, useEffect } from "react";
import MainSection from "./components/MainSection/index.js";
import SecondSection from "./components/SecondSection/index.js";
import { makeRequest } from "./services/index";
import dataContext from "./context/data";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./App.css";
import "./index.css";

const NODE_ENV = process.env.NODE_ENV || "development";

require("dotenv").config({
	path: `.env.${NODE_ENV}`,
});

function iconImg(icon) {
	return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

const App = () => {
	const [parisData, setParisData] = useState({});
	const [bogotaData, setBogotaData] = useState({});

	useEffect(() => {
		makeRequest(
			`http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=${process.env.API_KEY}&units=metric`,
			function (error, data) {
				if (error) {
					throw error;
				}
				// console.log("Paris:", data);
				setParisData(data);
			}
		);
		makeRequest(
			`https://api.openweathermap.org/data/2.5/onecall?lat=4.6097&lon=-74.0817&exclude=minutely,alerts,hourly&appid=${process.env.API_KEY}&units=metric`,
			function (error, data) {
				if (error) {
					throw error;
				}
				// console.log("Bogotá:", data);
				setBogotaData(data);
			}
		);
	}, []);

	return (
		<dataContext.Provider value={bogotaData}>
			<div className={styles.container}>
				<MainSection
					img={
						bogotaData.current !== undefined &&
						bogotaData.current.weather[0]["icon"] !== " " ? (
							iconImg(bogotaData.current.weather[0]["icon"])
						) : (
							<Loader
								type="Bars"
								color="#6e6e6e"
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
								type="Bars"
								color="#6e6e6e"
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
								type="Bars"
								color="#6e6e6e"
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
								type="Bars"
								color="#6e6e6e"
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
								type="Bars"
								color="#6e6e6e"
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
								type="Bars"
								color="#6e6e6e"
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
								type="Bars"
								color="#6e6e6e"
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
								type="Bars"
								color="#6e6e6e"
								height={20}
								width={20}
								timeout={3000} //3 secs
							/>
						)
					}
				/>
			</div>
		</dataContext.Provider>
	);
};

export default App;
