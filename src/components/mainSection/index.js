import React from "react";

import styles from "./mainSection.module.css";
import imgPin from "../../img/locationPin.png";
// import imgSun from "../../img/sun.png";

const MainSection = (props) => {
	return (
		<div>
			<div className={styles.weatherPlace}>
				<img src={imgPin} alt="Pin location" />
				<p>Bogotá</p>
			</div>
			<div className={styles.bigContainer}>
				<div className={styles.darkPurple}></div>
				<div className={styles.darkPurpleTransparent}></div>
				<div className={styles.weatherPlaceContainer}>
					<div className={styles.weatherImg}>
						<img
							className={styles.imgWeather}
							src={props.img}
							alt="img cloud"
						/>
						<p className={styles.weather}>{props.weather}</p>
					</div>
					<div className={styles.centigrades}>
						<p className={styles.weatherNumber}>{props.temperature}</p>
						<p>ºC</p>
					</div>
				</div>
				<div className={styles.lightPurple}></div>
				<div className={styles.lightPurpleTransparent}></div>
			</div>
		</div>
	);
};

export default MainSection;
