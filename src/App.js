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

/*
{
    "coord": {
        "lon": 2.3488,
        "lat": 48.8534
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 282.95,
        "feels_like": 281.69,
        "temp_min": 282.15,
        "temp_max": 283.71,
        "pressure": 1014,
        "humidity": 57
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.57,
        "deg": 60
    },
    "clouds": {
        "all": 0
    },
    "dt": 1619821500,
    "sys": {
        "type": 1,
        "id": 6550,
        "country": "FR",
        "sunrise": 1619843396,
        "sunset": 1619895916
    },
    "timezone": 7200,
    "id": 2988507,
    "name": "Paris",
    "cod": 200
}
*/
