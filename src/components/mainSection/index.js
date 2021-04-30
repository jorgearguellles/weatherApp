import React from "react";

import styles from "./MainSection.module.css";
import imgPin from "../../img/locationPin.png";
import imgSun from "../../img/sun.png";

const MainSection = () => {
	return (
		<div>
			<div className={styles.weatherPlace}>
				<img src={imgPin} alt="Pin location" />
				<p>Bogotá</p>
			</div>
			<div className={styles.weatherPlaceContainer}>
				<div className={styles.weatherImg}>
					<img className={styles.imgWeather} src={imgSun} alt="img cloud" />
				</div>
				<div className={styles.centigrades}>
					<p className={styles.weatherNumber}>31</p>
					<p>ºC</p>
				</div>
			</div>
		</div>
	);
};

export default MainSection;
