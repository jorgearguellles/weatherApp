import React from "react";

import styles from "./CardForecastDay.module.css";

const CardForecastDay = (props) => {
	return (
		<div className={styles.dayContainer}>
			<div className={styles.dayWeatherContainer}>
				<img
					className={styles.imgWeather}
					src={props.weatherImg}
					alt="img cloud"
				/>
				<div className={styles.letterContainer}>
					<p className={styles.day}>{props.day}</p>
					<p className={styles.weather}>{props.weather}</p>
				</div>
			</div>
			<div className={styles.weatherNumberContainer}>
				<p className={styles.weatherNumber}>
					{props.weatherNumberMax} /{props.weatherNumberMin}
				</p>
			</div>
		</div>
	);
};

export default CardForecastDay;
