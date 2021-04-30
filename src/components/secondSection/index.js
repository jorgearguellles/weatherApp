import React from "react";

import styles from "./SecondSection.module.css";
import CardForecastDay from "../CardForecastDay/index.js";

const SecondSection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.forecastContainer}>
				<p className={styles.titleSection}>
					<strong>3 Days</strong> Forecast
				</p>
				<CardForecastDay day="Friday" weather="Cloud" weatherNumber="34/45" />
				<CardForecastDay day="Saturday" weather="Sun" weatherNumber="14/15" />
				<CardForecastDay day="Sunday" weather="Rain" weatherNumber="30/25" />
			</div>
			<div className={styles.visitContainer}>Visit</div>
			<div className={styles.reviewsContainer}>Reviews</div>
			<div className={styles.otherPlacesContainer}>Paris</div>
		</div>
	);
};

export default SecondSection;
