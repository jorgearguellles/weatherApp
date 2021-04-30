import React from "react";

import styles from "./SecondSection.module.css";
import CardForecastDay from "../CardForecastDay/index.js";
import imgPin from "../../img/locationPin.png";
import imgFace from "../../img/face.jpg";
import imgMuseum from "../../img/museum.jpg";
import imgSun from "../../img/sun.png";

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
			<div className={styles.visitContainer}>
				<p className={styles.titleSection}>
					<strong>Place to</strong> visit
				</p>
				<div className={styles.visitNamePlace}>
					<img src={imgPin} alt="Pin location" />
					<p>
						Arab Street <br />
						Singapore
					</p>
				</div>
			</div>
			<div className={styles.reviewsContainer}>
				<div className={styles.titleContainer}>
					<p className={styles.review}>+ Top Reviews</p>
					<div className={styles.imgContainer}>
						<img src={imgFace} alt="Foto de reviews" />
						<img src={imgFace} alt="Foto de reviews" />
						<img src={imgFace} alt="Foto de reviews" />
						<p className={styles.plus}>6+</p>
					</div>
				</div>
				<div className={styles.reviewPlace}>
					<img src={imgPin} alt="Pin location" />
					<p>
						Art Science <br />
						Museum
					</p>
				</div>
				<div className={styles.reviewPlacePlus}>
					<div className={styles.reviewPinContainer}>
						<img src={imgPin} alt="Pin location" />
						<p>
							Art Science <br />
							Museum
						</p>
					</div>
					<div className={styles.reviewContainer}>
						<p className={styles.reviewPlus}>+</p>
					</div>
				</div>
			</div>
			<div className={styles.otherPlacesContainer}>
				<div className={styles.topSection}>
					<div className={styles.infoParis}>
						<div className={styles.imgParisContainer}>
							<img src={imgSun} alt="Img Sun" />
						</div>
						<div className={styles.tempAndCityContainer}>
							<div className={styles.temp}>
								<p className={styles.number}>12</p>
								<p className={styles.grades}>ºC</p>
							</div>
							<div className={styles.city}>
								<p className={styles.cityName}>Paris</p>
								<p className={styles.countryName}>Francia</p>
							</div>
						</div>
					</div>

					<div className={styles.textContainer}>
						<p>Humidity 8%</p>
						<p>West</p>
						<p>6.5km/h</p>
					</div>
				</div>
				<div className={styles.bottomSection}>
					<button className={styles.button}> Add Locations</button>
				</div>
			</div>
		</div>
	);
};

export default SecondSection;
